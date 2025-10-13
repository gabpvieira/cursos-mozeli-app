import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Placeholder para a capa - será substituída depois
const courseCover = "https://i.postimg.cc/9FRBt4s5/md2-nevou.jpg";

const CourseCardPlatinado = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="group bg-gradient-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="relative overflow-hidden bg-muted"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <img 
          src={courseCover} 
          alt="Platinado Lucrativo" 
          className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <motion.div 
          className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          EM DESTAQUE
        </motion.div>
      </motion.div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <motion.div 
          className="flex items-center gap-2" 
          style={{ color: '#b734f7' }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wider">Curso Profissionalizante</span>
        </motion.div>
        <motion.h2 
          className="text-xl sm:text-2xl font-bold text-foreground leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        >
          Platinado Lucrativo
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          Ideal para aqueles que querem aproveitar o fim de ano para lucrar ainda mais com o platinado, famoso nevou.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
        >
          <Button 
            onClick={() => navigate('/course/platinado')}
            className="w-full font-semibold py-4 sm:py-6 text-sm sm:text-base"
            style={{ backgroundColor: '#b734f7', color: 'white' }}
          >
            Ver Conteúdo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCardPlatinado;