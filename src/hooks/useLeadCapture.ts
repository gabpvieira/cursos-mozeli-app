import { useState, useEffect } from "react";

interface LeadData {
  name: string;
  whatsapp: string;
  timestamp: number;
}

const STORAGE_KEY = "mozeli_lead_captured";
const WEBHOOK_URL = "https://n8nwebhook.chatifyz.com/webhook/captacao-leads-isca";

export const useLeadCapture = () => {
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o lead já foi capturado
  useEffect(() => {
    const checkLeadStatus = () => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
          const leadData: LeadData = JSON.parse(storedData);
          // Verificar se os dados são válidos e não muito antigos (opcional)
          const isValid = leadData.name && leadData.whatsapp && leadData.timestamp;
          setIsLeadCaptured(!!isValid);
        }
      } catch (error) {
        console.error("Erro ao verificar dados do lead:", error);
        // Se houver erro, limpar dados corrompidos
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    checkLeadStatus();
  }, []);

  // Função para enviar dados para o webhook
  const sendToWebhook = async (data: { name: string; whatsapp: string }) => {
    try {
      const payload = {
        name: data.name,
        whatsapp: data.whatsapp,
        timestamp: new Date().toISOString(),
        source: "mozeli_cursos_app",
        utm_source: "curso_app",
        utm_medium: "lead_capture",
        utm_campaign: "cursos_mozeli"
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao enviar dados para webhook:", error);
      throw error;
    }
  };

  // Função para capturar o lead
  const captureLead = async (data: { name: string; whatsapp: string }) => {
    try {
      // Enviar para o webhook primeiro
      await sendToWebhook(data);

      // Se o envio foi bem-sucedido, salvar no localStorage
      const leadData: LeadData = {
        name: data.name,
        whatsapp: data.whatsapp,
        timestamp: Date.now(),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(leadData));
      setIsLeadCaptured(true);

      return { success: true };
    } catch (error) {
      console.error("Erro ao capturar lead:", error);
      throw error;
    }
  };

  // Função para limpar dados (útil para testes)
  const clearLeadData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsLeadCaptured(false);
  };

  // Função para obter dados do lead
  const getLeadData = (): LeadData | null => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Erro ao obter dados do lead:", error);
      return null;
    }
  };

  return {
    isLeadCaptured,
    isLoading,
    captureLead,
    clearLeadData,
    getLeadData,
  };
};