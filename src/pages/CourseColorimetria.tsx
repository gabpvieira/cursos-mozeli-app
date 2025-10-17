import { motion } from "framer-motion";
import { ArrowLeft, Palette, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CourseColorimetria = () => {
  const navigate = useNavigate();
  
  // Convertendo o link do Google Drive para formato embedável
  const pdfUrl = "https://drive.google.com/file/d/1bJF1exjXJyImbeoanfbhIfOa-f4XY1gX/preview";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="bg-card border-b border-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-card/95"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Colorimetria para Barbeiros</h1>
                <p className="text-sm text-muted-foreground">Do Básico ao Avançado</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Material em PDF</span>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.main 
        className="max-w-7xl mx-auto p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Description */}
        <motion.div 
          className="mb-6 p-6 bg-card border border-border rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-3">Sobre o Material</h2>
          <p className="text-muted-foreground leading-relaxed">
            O material "Colorimetria Para Barbeiros: Do Básico ao Avançado" é um guia completo criado para barbeiros 
            iniciantes e intermediários que buscam dominar a arte da coloração capilar. Aprenda fundamentos da colorimetria, 
            técnicas de descoloração, uso de superclareadores, regulação de pH e muito mais para alcançar resultados 
            profissionais como "nevou" e "platinado".
          </p>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div 
          className="bg-card border border-border rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-4 bg-muted border-b border-border">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Colorimetria Para Barbeiros - Material Completo
            </h3>
          </div>
          <div className="relative" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Colorimetria para Barbeiros - PDF"
              allow="autoplay"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          className="mt-6 p-4 bg-muted/50 border border-border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground text-center">
            💡 Use os controles do visualizador para navegar, fazer zoom e baixar o material
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default CourseColorimetria;