import { motion } from "framer-motion";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import CourseCardPlatinado from "@/components/CourseCardPlatinado";
import CourseCardColorimetria from "@/components/CourseCardColorimetria";

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
