import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courseCover = "https://i.postimg.cc/4xy9Gjbt/md1-moz.jpg";

const CourseCard = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="group bg-gradient-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="overflow-hidden bg-muted"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <img 
          src={courseCover} 
          alt="Curso Iniciante para Barbeiros" 
          className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <motion.div 
          className="flex items-center gap-2 text-primary"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wider">Técnicas e fundamentos</span>
        </motion.div>
        <motion.h2 
          className="text-xl sm:text-2xl font-bold text-foreground leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          Curso Iniciante para Barbeiros
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        >
          Aprenda do zero os fundamentos essenciais da barbearia profissional. 
          Um guia completo passo a passo para começar sua carreira com excelência.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          <Button 
            onClick={() => navigate('/course')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 sm:py-6 text-sm sm:text-base"
          >
            Ver Conteúdo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
