import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Clock, Star } from "lucide-react";
import logoImage from "@/assets/PNG ORIGINAL.png";
import md1Image from "@/assets/slides-md/MD1 - AULAS TEÓRICAS.png";
import md2Image from "@/assets/slides-md/MD2 - DESCOLORAÇÃO.png";
import md3Image from "@/assets/slides-md/MD3 - TONALIZAÇÃO.png";
import md4Image from "@/assets/slides-md/MD4 - FINALIZAÇÃO.png";

// Bonus images
import bonusLuzesImage from "@/assets/slides-md/bonus-capa/MDBONUS - LUZES SEM MANCHAS.png";
import bonusRootsImage from "@/assets/slides-md/bonus-capa/MDBONUS - TECNICA ROOTS.png";

const PlatinandoLucrativo = () => {
  const modules = [
    { image: md1Image, title: "MD1 - AULAS TEÓRICAS" },
    { image: md2Image, title: "MD2 - DESCOLORAÇÃO" },
    { image: md3Image, title: "MD3 - TONALIZAÇÃO" },
    { image: md4Image, title: "MD4 - FINALIZAÇÃO" }
  ];

  const bonusModules = [
    { image: bonusLuzesImage, title: "BÔNUS - LUZES SEM MANCHAS" },
    { image: bonusRootsImage, title: "BÔNUS - TÉCNICA ROOTS" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBonusSlide, setCurrentBonusSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % modules.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [modules.length]);

  useEffect(() => {
    const bonusInterval = setInterval(() => {
      setCurrentBonusSlide((prev) => (prev + 1) % bonusModules.length);
    }, 3000);

    return () => clearInterval(bonusInterval);
  }, [bonusModules.length]);

  const handleCTAClick = () => {
    const checkoutUrl = "https://pay.cakto.com.br/3c2nivy_525940?utm_source=pagina_isca&utm_medium=cta_platinado&utm_campaign=platinado_lucrativo";
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div className="relative mx-2 sm:mx-4 my-4 sm:my-8">
      {/* OPORTUNIDADE Badge - Positioned above container */}
      <div className="absolute -top-4 left-0 right-0 z-30 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center justify-center bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full font-bold text-sm md:text-base uppercase tracking-wider shadow-xl">
            OPORTUNIDADE
          </div>
        </motion.div>
      </div>
      
      <section className="relative bg-gradient-to-br from-[#ac21fd] to-black py-6 sm:py-12 px-2 sm:px-4 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-dashed border-red-500 overflow-hidden mt-6">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logoImage} 
              alt="Platinado Lucrativo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GANHE R$ 200
            <br />
            <span className="text-yellow-400">POR DIA</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-sm md:text-lg text-gray-200 font-medium mb-6 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Enquanto muitos barbeiros perdem dinheiro errando o platinado, quem domina essa técnica tá cobrando <span className="text-yellow-400 font-bold">R$200 por cliente</span>, e com fila de espera no fim do ano.
          </motion.p>

          {/* Benefits */}
          <motion.div 
            className="max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left px-2">
              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200 font-medium text-sm leading-relaxed">Aulas curtas, diretas ao ponto</span>
              </div>
              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200 font-medium text-sm leading-relaxed">Técnica que evita ardência e manchas</span>
              </div>
              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200 font-medium text-sm leading-relaxed">Resultado branco, uniforme e hidratado</span>
              </div>
              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200 font-medium text-sm leading-relaxed">Ideal para fim de ano</span>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2 justify-center bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200 font-medium text-sm leading-relaxed">100% testado em barbearias reais</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Video Container with Professional Connection */}
          <div className="relative bg-gradient-to-b from-transparent via-black/20 to-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            {/* Video Headline */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4 text-white uppercase tracking-wide leading-tight">
              COMO É POR DENTRO DO CURSO:
            </h3>
            
            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full"></div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-red-500 bg-black/50">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/JKQ1rZHqpsA?si=GMIeWgLWpVMI8SRs&autoplay=0&rel=0&modestbranding=1"
                  title="Platinado Lucrativo - Aula Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Learning Container with Professional Connection */}
          <div className="relative bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-black/40 rounded-2xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4 text-white uppercase tracking-wide leading-tight">
              O QUE VOCÊ VAI<br />APRENDER:
            </h3>
            
            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
            </div>
            
            <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {modules.map((module, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1 sm:px-2">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-red-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            </div>
          </div>
        </motion.div>

        {/* Bonus Section */}
        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Bonus Container with Professional Connection */}
          <div className="relative bg-gradient-to-b from-yellow-900/30 via-orange-800/20 to-black/40 rounded-2xl p-6 backdrop-blur-sm border border-yellow-400/20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4 text-white uppercase tracking-wide leading-tight">
              🎁 BÔNUS EXCLUSIVOS<br />QUE VOCÊ VAI GANHAR<br />AO ADQUIRIR:
            </h3>
            
            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            
            <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBonusSlide * 100}%)` }}
              >
                {bonusModules.map((bonus, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1 sm:px-2">
                    <img 
                      src={bonus.image} 
                      alt={bonus.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {bonusModules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBonusSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentBonusSlide === index ? 'bg-yellow-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Price Anchor */}
          <div className="mb-4">
            <p className="text-sm text-gray-300 mb-1">De <span className="line-through text-red-400 font-bold text-lg">R$ 147,00</span></p>
            
            {/* Main Price - 80% width */}
            <div className="w-4/5 mx-auto mb-3">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-green-400 text-center leading-none">R$ 29,90</span>
            </div>
            
            {/* Additional pricing info */}
            <div className="text-center mb-3">
              <p className="text-sm font-bold text-yellow-400">ou 6x de R$ 5,90</p>
            </div>
            
            <motion.div
              className="inline-block bg-red-500 text-white px-3 py-1.5 rounded-full font-bold text-xs uppercase"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥 80% DE DESCONTO 🔥
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl border-2 border-green-400/50 transition-all duration-300 w-full sm:w-auto"
              size="lg"
            >
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              QUERO LUCRAR MAIS
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
            </Button>
          </motion.div>

          {/* Urgency Text */}
          <motion.p 
            className="text-xs text-gray-300 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            ⚡ Oferta por tempo limitado • Acesso imediato após o pagamento
          </motion.p>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default PlatinandoLucrativo;