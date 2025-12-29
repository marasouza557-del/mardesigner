import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function MarDesignerSite() {
  const sectionTitleClass = "text-3xl md:text-3xl font-bold mb-12 text-center uppercase tracking-widest";

  const serviceColors = ['#1e5fa1', '#42a5f5', '#1e88e5']; // primeira cor mais escura para melhor contraste

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#0a1f44] to-[#1e88e5] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#081733]/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.img
              src="/Logo4-8.png"
              alt="Logo MAR DESIGNER"
              className="w-8 h-8 md:w-8 md:h-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-['Poppins'] font-bold tracking-widest text-lg uppercase">MAR DESIGNER</span>
          </div>

          <ul className="hidden md:flex gap-6 text-sm text-white">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portifólio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex flex-col items-center justify-center text-center px-4 md:px-6 py-24 overflow-hidden">
        {/* Foto de fundo abaixo dos textos e botões */}
        <motion.img
          src="/minha-foto.jpg"
          alt="Fundo Mariana Souza"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 max-w-3xl">
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-4xl md:text-6xl font-bold mb-6">
            <span className="font-['Poppins'] uppercase tracking-widest bg-gradient-to-r from-white via-[#90caf9] to-white bg-clip-text text-transparent">
              MAR DESIGNER
            </span>
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
            <strong className="font-bold">Profundidade, movimento e identidade.</strong>
            <br />
            Design estratégico para marcas que querem comunicar com clareza, personalidade e impacto.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <a href="https://wa.me/5598984921834" target="_blank" rel="noreferrer">
              <Button className="rounded-2xl px-8 py-6 text-base shadow-lg transition-all">
                Solicitar Orçamento
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-4 md:px-6 max-w-7xl mx-auto bg-white text-[#0a1f44] rounded-2xl shadow-lg">
        <h2 className={sectionTitleClass}>SERVIÇOS</h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {['Identidade Visual', 'Materiais Promocionais', 'Social Mídia'].map((title, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 200 }} className="w-full md:w-80">
              <Card className={`hover:shadow-xl transition-shadow text-white text-center min-h-[220px] flex flex-col justify-center`} style={{backgroundColor: serviceColors[idx]}}>
                <CardContent>
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="px-4">{title === 'Identidade Visual' ? 'Construímos identidades visuais consistentes para fortalecer o reconhecimento da sua marca.' : title === 'Materiais Promocionais' ? 'Projetamos panfletos, cartazes e gráficos que atraem a atenção e promovem sua mensagem.' : 'Criamos conteúdos gráficos para redes sociais para promover seu visual.'}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-24 px-4 md:px-6 max-w-7xl mx-auto bg-[#081733] text-white rounded-2xl shadow-lg">
        <h2 className={sectionTitleClass}>PORTIFÓLIO</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['/portfolio1.jpg','/portfolio2.jpg','/portfolio3.jpg','/portfolio4.jpg','/portfolio5.jpg','/portfolio6.jpg'].map((img, index) => (
            <motion.img key={index} whileHover={{ scale: 1.05 }} src={img} alt={`Projeto ${index+1}`} className="w-full h-auto rounded-lg shadow-lg" />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.behance.net/marianasouza138" target="_blank" rel="noreferrer" className="text-blue-300 underline hover:opacity-80">
            Ver mais no Behance
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-4 md:px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg text-[#0a1f44]">
        <motion.img whileHover={{ scale: 1.02 }} src="/minha-foto.jpg" alt="Mariana Souza" className="w-64 h-64 md:w-64 md:h-64 object-cover shadow-lg mx-auto" />
        <div className="flex-1 text-left max-w-sm md:max-w-md mx-auto md:mx-auto">
          <h2 className={sectionTitleClass}>SOBRE MIM</h2>
          <p>Sou Mariana Souza, 25 anos, formada em Design Gráfico e cursos na área. Comecei com 20 anos e nunca mais parei. Minha paixão por design gráfico ganha vida ao criar imagens impactantes e conteúdos visuais para mídias sociais e empresas, incorporando as mais recentes tendências e técnicas no meu trabalho.</p>
        </div>
      </section>

      {/* Landing Page Mensagem */}
      <section id="mensagem" className="px-6 py-24 bg-gradient-to-b from-[#1e88e5] to-[#0a1f44] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 uppercase tracking-widest">Vamos conversar</h2>
          <p className="text-lg font-light mb-12 opacity-90">
            Envie uma mensagem com sua ideia ou necessidade e retornarei o mais breve possível.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const nome = form.elements.namedItem('nome').value;
              const mensagem = form.elements.namedItem('mensagem').value;
              window.open(`https://wa.me/5598984921834?text=${encodeURIComponent(`Olá, meu nome é ${nome}. ${mensagem}`)}`,'_blank');
            }}
            className="space-y-6 text-left"
          >
            <input type="text" name="nome" placeholder="Seu nome" required className="w-full p-4 rounded-xl text-[#0a1f44]" />
            <textarea name="mensagem" placeholder="Escreva sua mensagem" rows={4} required className="w-full p-4 rounded-xl text-[#0a1f44]" />
            <div className="text-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} type="submit" className="bg-white text-[#0a1f44] px-10 py-4 rounded-2xl font-semibold shadow-lg">
                Enviar mensagem
              </motion.button>
            </div>
          </form>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className={sectionTitleClass}>CONTATO</h2>
        <div className="text-center mb-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="tel:+5598984921834" className="flex items-center gap-2 underline"><FaWhatsapp /> (98) 98492-1834</a>
          <a href="mailto:marasouza557@gmail.com" className="flex items-center gap-2 underline"><FaEnvelope /> marasouza557@gmail.com</a>
        </div>
        <p className="text-center">Disponível das 7:00 às 18:00</p>
      </section>
    </div>
  );
}
