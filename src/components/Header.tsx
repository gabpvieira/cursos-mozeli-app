import { motion } from "framer-motion";
import profileImg from "@/assets/perfil-mozeli.png";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-12 px-4 bg-gradient-card border-b border-border"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 shadow-glow" style={{ borderColor: '#5625fb' }}>
              <img 
                src={profileImg} 
                alt="Mozeli Barbeiro" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Mozeli Barbeiro
            </motion.h1>
            <div className="text-base md:text-lg max-w-lg space-y-3">
              <motion.div 
                className="bg-card border border-border rounded-lg px-4 py-3 text-foreground shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                💈 Ajudo iniciantes a DOMINAR a barbearia
              </motion.div>
              <motion.div 
                className="bg-card border border-border rounded-lg px-4 py-3 text-foreground shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                🚀 Técnicas RÁPIDAS e LUCRATIVAS
              </motion.div>
              <motion.div 
                className="bg-card border border-border rounded-lg px-4 py-3 text-foreground shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              >
                ✅ +1.000 alunos formados
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
