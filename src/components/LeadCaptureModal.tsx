import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Loader2, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeadCapture } from "@/hooks/useLeadCapture";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  courseName: string;
}

const LeadCaptureModal = ({ isOpen, onClose, onSuccess, courseName }: LeadCaptureModalProps) => {
  const { captureLead } = useLeadCapture();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    whatsapp: ""
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      whatsapp: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "WhatsApp deve ter 10 ou 11 dígitos";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.whatsapp;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await captureLead({
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.replace(/\D/g, ""),
      });
      
      setIsSuccess(true);
      
      // Aguardar um pouco para mostrar o sucesso, depois fechar
      setTimeout(() => {
        onSuccess();
        onClose();
        setIsSuccess(false);
        setFormData({ name: "", whatsapp: "" });
      }, 1500);
      
    } catch (error) {
      console.error("Erro ao capturar lead:", error);
      alert("Erro ao enviar dados. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    
    // Limitar a 11 dígitos
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    
    // Aplicar máscara brasileira (99) 99999-9999
    let formattedValue = "";
    if (value.length > 0) {
      if (value.length <= 2) {
        formattedValue = `(${value}`;
      } else if (value.length <= 7) {
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      }
    }
    
    setFormData(prev => ({ ...prev, whatsapp: formattedValue }));
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.div
              className="flex justify-center mb-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="p-3 bg-white/20 rounded-full">
                <Lock className="w-8 h-8 text-primary-foreground" />
              </div>
            </motion.div>
            
            <h2 className="text-xl font-bold text-primary-foreground mb-2">
              Acesso Liberado!
            </h2>
            <p className="text-primary-foreground/90 text-sm">
              Preencha seus dados para acessar o conteúdo do <strong>{courseName}</strong>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    className={`pl-10 ${errors.whatsapp ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                    maxLength={15}
                  />
                </div>
                {errors.whatsapp && (
                  <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Formato: (99) 99999-9999
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base"
              disabled={isSubmitting || isSuccess}
            >
              {isSuccess ? (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Acesso Liberado!
                </motion.div>
              ) : isSubmitting ? (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Liberando...
                </motion.div>
              ) : (
                "🔓 LIBERAR ACESSO"
              )}
            </Button>

            {/* Security Note */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                🔒 Seus dados estão seguros e não serão compartilhados
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadCaptureModal;