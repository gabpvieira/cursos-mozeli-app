import { motion } from "framer-motion";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import CourseCardPlatinado from "@/components/CourseCardPlatinado";
import CourseCardColorimetria from "@/components/CourseCardColorimetria";
import PlatinandoLucrativo from "@/components/PlatinandoLucrativo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efeitos de brilho desfocado estratégicos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Brilho superior esquerdo */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: '#5625fb' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* Brilho superior direito */}
        <motion.div 
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#5625fb' }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
        />
        
        {/* Brilho central */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ backgroundColor: '#5625fb' }}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
        />
        
        {/* Brilho inferior esquerdo */}
        <motion.div 
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-12 blur-3xl"
          style={{ backgroundColor: '#5625fb' }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.2, delay: 2, ease: "easeOut" }}
        />
        
        {/* Brilho inferior direito */}
        <motion.div 
          className="absolute -bottom-16 -right-16 w-88 h-88 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: '#5625fb' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.13, scale: 1 }}
          transition={{ duration: 2.8, delay: 2.5, ease: "easeOut" }}
        />
      </div>
      
      <div className="relative z-10">
        <Header />
      </div>
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Texto acima do Platinado Lucrativo */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cursos e Materias Gratuitos Abaixo!
            </h2>
            
            {/* Seta animada azul */}
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0000f2]"
              >
                <path 
                  d="M12 5V19M12 19L7 14M12 19L17 14" 
                  stroke="#0000f2" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Seção Platinado Lucrativo */}
          <PlatinandoLucrativo />
          
          {/* Divisão/Espaçamento */}
          <motion.div 
            className="my-16 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="mx-6 p-3 bg-card rounded-full border border-border shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-primary"
                  >
                    <path 
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
          </motion.div>
          
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            >
              Cursos Disponíveis
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            >
              Desenvolva suas habilidades e transforme sua carreira com nossos cursos especializados
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard />
            <CourseCardPlatinado />
            <CourseCardColorimetria />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
