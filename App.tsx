
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BackgroundScene } from './components/QuantumScene';
import { ModuleCard, FAQAccordion, GuaranteeSeal, BonusGuarantee, AuthorBio, HeroMockup } from './components/Diagrams';
import { Star, ArrowRight, Lock, AlertTriangle, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [showStickyBottom, setShowStickyBottom] = useState(false);
  const CHECKOUT_URL = "https://pay.hotmart.com/U103064204S";

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBottom(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-page-dark text-white overflow-x-hidden font-sans selection:bg-neon-green selection:text-black pb-24 md:pb-0">
      
      {/* Sticky Top Bar for Desktop */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-stone-900 h-20 flex items-center justify-between px-6 hidden md:flex">
         <div className="font-heading font-black text-xl tracking-tighter flex items-center gap-1">
            <span className="text-white">MÉTODO</span><span className="text-neon-green">APROBADO</span>
         </div>
         <button 
            onClick={handleCheckout}
            className="flex items-center gap-2 bg-neon-green hover:bg-green-400 text-black text-sm font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105"
         >
            ACCEDER AHORA <ArrowRight size={18} strokeWidth={3} />
         </button>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <BackgroundScene />
        
        <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left Column: Copy */}
           <div className="order-2 lg:order-1 text-left mt-8 lg:mt-0 flex flex-col justify-center">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-full px-4 py-1.5 mb-8 w-fit">
                 <span className="w-2 h-2 bg-neon-red rounded-full animate-pulse"></span>
                 <span className="text-[10px] md:text-xs font-bold tracking-widest text-stone-500 uppercase">ATENCIÓN ESTUDIANTES DE SALUD</span>
              </div>
              
              {/* Headline Group */}
              <div className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8">
                  <div className="block text-white mb-2">DEJA DE</div>
                  <div className="block text-white mb-2">MEMORIZAR</div>
                  <div className="block text-white mb-2">1.300 PÁGINAS</div>
                  <div className="block text-white mb-6">DE ANATOMÍA Y</div>
                  {/* Green Block */}
                  <div className="bg-neon-green text-black p-4 md:p-6 inline-block transform -skew-x-2">
                      <span className="block transform skew-x-2 text-3xl md:text-4xl lg:text-5xl leading-none">
                          EMPIEZA A ENTENDERLAS EN 60 MINUTOS.
                      </span>
                  </div>
              </div>
              
              <p className="text-lg md:text-xl text-stone-400 mb-10 leading-relaxed max-w-xl">
                 El sistema de <strong className="text-white">ingeniería inversa</strong> que usan el 10% de los estudiantes que aprueban sin ansiedad.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col items-center sm:items-start gap-4 mb-12">
                 {/* Pricing Text */}
                 <div className="flex items-center gap-3 text-lg md:text-xl font-bold">
                     <div className="relative text-stone-500">
                        <span className="relative z-10">Antes $71 USD</span>
                        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-red-600 transform -rotate-6 scale-110 z-20"></div>
                     </div>
                     <span className="text-stone-400">-</span>
                     <span className="text-neon-green">Ahora $17 USD</span>
                 </div>

                 <button 
                    onClick={handleCheckout}
                    className="w-full sm:w-auto px-10 py-5 bg-neon-green hover:bg-green-400 text-black font-black text-xl rounded-lg shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide group"
                 >
                    QUIERO APROBAR AHORA
                 </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-stone-800 flex items-center justify-center overflow-hidden">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*123}`} alt="User" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-stone-900 flex items-center justify-center text-[10px] font-bold text-white">+500</div>
                 </div>
                 <div>
                    <div className="flex text-yellow-500 mb-1 space-x-0.5">
                        {[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <p className="text-xs text-stone-500 font-bold tracking-wide">+500 Estudiantes ya están usando el Método</p>
                 </div>
              </div>
           </div>

           {/* Right Column: Mockup */}
           <div className="order-1 lg:order-2 relative flex justify-center">
              {/* Replaced Image with CSS 3D Mockup Component */}
              <HeroMockup />
           </div>
        </div>
      </header>

      {/* PAIN SECTION */}
      <section className="py-24 bg-black border-y border-stone-900">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-block p-4 rounded-full bg-stone-900/50 mb-6">
                <AlertTriangle className="text-neon-red w-10 h-10" />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight">¿Te sientes estúpido frente al libro de texto?</h2>
            <p className="text-xl text-stone-400 leading-relaxed mb-10 max-w-2xl mx-auto">
               <strong className="text-white">No es tu culpa.</strong> El sistema tradicional te obliga a usar tu cerebro como un disco duro. Te pasas 12 horas leyendo, te ahogas en nombres latinos, y al día siguiente has olvidado el 80%.
            </p>
            <p className="text-2xl font-bold text-white">
               Eso no es estudiar. <span className="text-neon-red underline decoration-wavy decoration-2 underline-offset-8">Es sufrir.</span>
            </p>
         </div>
      </section>

      {/* MECHANISM / SOLUTION */}
      <section className="py-32 bg-page-dark relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-20">
               <span className="text-neon-green font-bold tracking-[0.2em] uppercase text-xs border border-neon-green/30 px-3 py-1 rounded-full">La Solución</span>
               <h2 className="font-heading text-4xl md:text-6xl font-bold mt-6 mb-8">Ingeniería Inversa</h2>
               <p className="text-stone-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  No es un libro de texto más. Es un <strong className="text-white">manual de operaciones</strong>. Destilamos la paja y nos quedamos con la lógica mecánica del cuerpo humano.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 bg-[#0A0A0A] border border-stone-800 rounded-2xl hover:border-neon-purple/50 transition-all group hover:-translate-y-2">
                   <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">🧠</div>
                   <h3 className="font-heading font-bold text-2xl mb-4 text-white">Hardware</h3>
                   <p className="text-stone-400 leading-relaxed">Estructura física y cableado. Entiende la máquina antes de encenderla (Neuroanatomía).</p>
                </div>
                <div className="p-10 bg-[#0A0A0A] border border-stone-800 rounded-2xl hover:border-neon-green/50 transition-all group hover:-translate-y-2">
                   <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">💻</div>
                   <h3 className="font-heading font-bold text-2xl mb-4 text-white">Software</h3>
                   <p className="text-stone-400 leading-relaxed">Sistemas de control y respuesta. Piloto automático vs. Manual (Sistema Autónomo).</p>
                </div>
                <div className="p-10 bg-[#0A0A0A] border border-stone-800 rounded-2xl hover:border-neon-red/50 transition-all group hover:-translate-y-2">
                   <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                   <h3 className="font-heading font-bold text-2xl mb-4 text-white">Motor</h3>
                   <p className="text-stone-400 leading-relaxed">Hidráulica y bombeo. Presión y flujo explicados con física simple (Cardiovascular).</p>
                </div>
            </div>
         </div>
      </section>

      {/* THE STACK */}
      <section className="py-24 bg-black">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
                 <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">Lo Que Obtienes</h2>
                 <p className="text-stone-500 text-xl">(La Colección Maestra Vol. 1)</p>
            </div>
            
            <div className="space-y-8">
               <ModuleCard 
                  title="Neuroanatomía en 60 Minutos"
                  subtitle="MÓDULO 1: EL HARDWARE"
                  description="Domina potenciales de acción y sinapsis sin matemáticas. Entiende por fin 'quién conecta con quién'."
                  image="image_3.png"
                  color="purple"
                  referencePrice="$27 USD"
                  payPrice="$17 USD"
               />
               
               <ModuleCard 
                  title="Sistema Autónomo: Manual de Operaciones"
                  subtitle="MÓDULO 2: EL SOFTWARE"
                  description="Controla el estrés y entiende la guerra vs. paz interna. El manual definitivo del piloto automático."
                  image="image_4.png"
                  color="green"
                  referencePrice="$17 USD"
                  payPrice="GRATIS"
               />

               <ModuleCard 
                  title="Código Cardiovascular"
                  subtitle="MÓDULO 3: EL MOTOR"
                  description="Hidráulica y presión arterial explicada con lógica. Domina el sistema de tuberías más complejo del mundo."
                  image="image_1.png"
                  color="red"
                  referencePrice="$17 USD"
                  payPrice="GRATIS"
               />

               <ModuleCard 
                  title="Hojas de Trucos Maestras"
                  subtitle="BONUS DE ACCIÓN RÁPIDA"
                  description="Tu 'torpedo' legal para repasar 5 minutos antes del examen. Resúmenes visuales de alto impacto."
                  image="image_2.png"
                  color="green"
                  isBonus={true}
                  referencePrice="$10 USD"
                  payPrice="GRATIS"
               />
            </div>
         </div>
      </section>

      {/* PRICING & ANCHOR */}
      <section id="pricing" className="py-32 bg-gradient-to-b from-black to-stone-950 text-center px-6 scroll-mt-20">
         <div className="max-w-3xl mx-auto bg-[#080808] border border-stone-800 rounded-3xl p-8 md:p-20 relative shadow-2xl overflow-hidden group">
             {/* Glow effect behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-green/5 blur-[100px] group-hover:bg-neon-green/10 transition-all duration-700"></div>

             {/* Ribbon */}
             <div className="absolute top-0 right-0 bg-neon-red text-white text-xs font-black tracking-widest px-12 py-2 transform rotate-45 translate-x-14 translate-y-8 shadow-lg z-20">
                OFERTA LIMITADA
             </div>

             <div className="relative z-10">
                 <h3 className="text-stone-500 font-bold uppercase tracking-[0.3em] mb-8 text-xs">Acceso Digital Inmediato</h3>
                 
                 <div className="flex flex-col items-center justify-center mb-10">
                     <div className="relative">
                         <p className="text-stone-600 text-2xl mb-4 font-bold">Valor: $71 USD</p>
                         <div className="absolute left-0 right-0 top-[14px] h-[3px] bg-neon-red transform -rotate-6 opacity-80"></div>
                     </div>
                     
                     <h2 className="text-7xl md:text-9xl font-black text-white font-heading tracking-tighter flex items-start justify-center leading-none">
                        <span className="text-4xl mt-4 mr-2">$</span>17<span className="text-2xl mt-8 ml-2 text-stone-500 font-medium tracking-normal">USD</span>
                     </h2>
                     <span className="bg-white text-black text-xs font-black px-4 py-1.5 rounded mt-6 uppercase tracking-wide">Ahorras un 75% hoy</span>
                 </div>
                 
                 <p className="text-lg text-stone-400 mb-12 max-w-md mx-auto leading-relaxed">
                    Todo lo que necesitas para aprobar, por menos de lo que cuesta una pizza el fin de semana.
                 </p>

                 <button 
                    onClick={handleCheckout}
                    className="w-full bg-neon-green hover:bg-green-400 text-black font-black text-xl md:text-2xl py-6 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                 >
                    <Lock size={24} strokeWidth={2.5} /> QUIERO APROBAR AHORA
                 </button>
                 
                 <p className="mt-8 text-xs text-stone-600 flex items-center justify-center gap-2 font-medium">
                    <ShieldCheck size={14} className="text-green-500" /> Pago 100% Seguro vía Hotmart
                 </p>
             </div>
         </div>
      </section>

      {/* GRAND SLAM GUARANTEE SECTION */}
      <section className="px-6 -mt-16 relative z-20 pb-20">
         <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
             <GuaranteeSeal />
             <BonusGuarantee />
         </div>
      </section>

      {/* AUTHOR */}
      <section className="py-24 px-6 bg-page-dark border-t border-stone-900">
         <AuthorBio />
      </section>

      {/* FAQ */}
      <section className="py-24 bg-stone-950 border-t border-stone-900">
         <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
            <FAQAccordion items={[
                { q: "¿Es un libro físico?", a: "No. Es una colección digital (PDFs de alta resolución) optimizada para estudiar en tablet, computadora o móvil. No tienes que esperar envíos, el acceso es inmediato." },
                { q: "¿Sirve para Medicina, Enfermería o Kinesiología?", a: "Sí. La fisiología humana es la base universal de todas las carreras de salud. El Método Aprobado te da la estructura lógica que necesitas para entender cualquier libro de texto avanzado." },
                { q: "¿Cómo accedo al material?", a: "Inmediatamente después de tu pago seguro, recibirás un correo de Hotmart con tus credenciales. Podrás descargar todo el material y guardarlo para siempre." },
                { q: "¿Qué pasa si no entiendo nada?", a: "Usas nuestra Garantía de Claridad. Si en 7 días sientes que no has aprendido más que en tus clases, te devolvemos el 100% de tu dinero. Sin preguntas." }
            ]} />
         </div>
      </section>

      {/* FINAL FOOTER */}
      <div className="py-20 bg-black text-center border-t border-stone-900">
          <div className="container mx-auto px-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-10 font-heading text-white">Tu aprobado está a un clic.</h3>
              <button 
                 onClick={handleCheckout}
                 className="bg-white hover:bg-stone-200 text-black font-black text-lg px-12 py-5 rounded-full shadow-xl transform hover:scale-105 transition-all mb-10"
              >
                 OBTENER ACCESO INMEDIATO
              </button>
              <p className="text-stone-700 text-xs leading-relaxed">
                 © 2024 El Método Aprobado. Todos los derechos reservados. <br/>
                 Este sitio no es parte de Facebook o Facebook Inc.
              </p>
          </div>
      </div>

      {/* MOBILE STICKY BOTTOM CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-black border-t border-stone-800 p-4 z-50 md:hidden transition-transform duration-300 ${showStickyBottom ? 'translate-y-0' : 'translate-y-full'}`}>
          <button 
            onClick={handleCheckout}
            className="w-full bg-neon-green text-black font-black text-lg py-4 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2"
          >
            APROBAR POR $17 USD <ArrowRight size={18} strokeWidth={3} />
          </button>
      </div>

    </div>
  );
};

export default App;
