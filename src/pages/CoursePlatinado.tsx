import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CoursePlatinado = () => {
  const navigate = useNavigate();

  // Garantir que sempre inicie no topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('2025-10-20T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
          countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      } else {
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
          countdownElement.innerHTML = "Preço já aumentou!";
        }
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleUnlockAccess = () => {
    const checkoutUrl = "https://pay.cakto.com.br/3c2nivy_525940";
    const utmParams = new URLSearchParams({
      utm_source: "app-cursos-gratis",
      utm_medium: "curso-platinado",
      utm_campaign: "liberar-acesso"
    });
    
    window.open(`${checkoutUrl}?${utmParams.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Platinado Lucrativo</h1>
              <p className="text-sm text-muted-foreground">Curso </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Video Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              CONHEÇA O CURSO POR DENTRO: Platinado Lucrativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça por dentro os bastidores do nosso método exclusivo através desta prévia especial. Você verá fragmentos reais das aulas teóricas, demonstrações práticas simplificadas e o processo de finalização das técnicas de platinado lucrativo.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="aspect-video bg-black relative">
              <iframe
                src="https://www.youtube.com/embed/JKQ1rZHqpsA?modestbranding=1&controls=0&showinfo=0&rel=0"
                title="Aula Demo - Platinado Lucrativo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Play className="w-4 h-4" />
                Aula Demo
              </div>
            </div>
          </div>

          {/* Access Blocked Section */}
          <div className="rounded-lg border border-border p-6 text-center space-y-6" style={{ backgroundColor: '#00030c' }}>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-gray-300" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">Acesso Bloqueado</h2>
              <p className="text-gray-300 max-w-md mx-auto">
                Este conteúdo é exclusivo apenas para alunos. Libere seu acesso agora e aprenda todas as técnicas do platinado lucrativo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-center space-y-4">
                <img 
                  src="https://i.postimg.cc/L69J2GBw/HEADLINE-INICIO.png" 
                  alt="Headline" 
                  className="mx-auto max-w-full h-auto"
                />
                
                <img 
                  src="https://i.postimg.cc/PfzLGdZb/MDS-CURSO.jpg" 
                  alt="Meio do curso" 
                  className="mx-auto max-w-full h-auto"
                />
                
                <img 
                  src="https://i.postimg.cc/28k1rg7p/BANNER-QUIZ.jpg" 
                  alt="Banner Quiz" 
                  className="mx-auto max-w-full h-auto"
                />
                
                {/* Aviso de aumento de preço */}
                <div className="bg-red-600 text-white p-3 rounded-lg mb-4">
                  <div className="text-sm font-semibold mb-2">⚠️ ATENÇÃO: Preço aumenta em 20/10/2025!</div>
                  <div id="countdown" className="text-lg font-bold"></div>
                </div>

                <div className="w-[70%] mx-auto text-center">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: '#b734f7' }}>
                    R$ 19,90
                  </div>
                  <div className="text-lg text-gray-400 mt-2">
                    Acesso VITALÍCIO + BÔNUS
                  </div>
                </div>
              </div>

              <Button
                onClick={handleUnlockAccess}
                className="w-full max-w-sm mx-auto font-semibold py-6 text-lg animate-pulse"
                style={{ backgroundColor: '#b734f7', color: 'white' }}
                size="lg"
              >
                LIBERAR ACESSO
              </Button>
            </div>

            <div className="text-xs text-gray-400">
              Pagamento seguro • Acesso imediato após confirmação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlatinado;