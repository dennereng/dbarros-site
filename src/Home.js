import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo DBarros" className="h-12" />
        <nav className="space-x-4 text-sm sm:text-base">
          <a href="#about" className="hover:underline">Quem Somos</a>
          <a href="#services" className="hover:underline">Serviços</a>
          <a href="#clients" className="hover:underline">Para Você</a>
          <a href="#partners" className="hover:underline">Para Profissionais</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </header>

      <section className="bg-gray-100 text-center py-20 px-4">
        <h1 className="text-4xl font-bold">Transformando projetos em realidade com qualidade e segurança</h1>
        <p className="mt-4 text-lg">Projetos Hidrossanitários, Elétricos e Gerenciamento de Obras</p>
      </section>

      <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
        <p>
          A DBarros Engenharia é especializada em projetos hidrossanitários, projetos elétricos em baixa tensão e gerenciamento completo de obras. Atuamos com foco em qualidade, segurança e eficiência, atendendo clientes finais e profissionais do setor.
        </p>
      </section>

      <section id="services" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🚿 Projetos Hidrossanitários</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Projeto de Água Fria</li>
              <li>Projeto de Água Quente</li>
              <li>Projeto de Recirculação de Água Quente</li>
              <li>Projeto de Esgoto e Ventilação</li>
              <li>Projeto de Águas Pluviais e Drenagem</li>
              <li>Projeto de Piscinas</li>
              <li>Projeto de Drenos de Ar Condicionado</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">💡 Projetos Elétricos</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Projeto Elétrico em Baixa Tensão</li>
              <li>Projeto de Entrada de Energia</li>
              <li>Projeto de Dados, Som e Imagem</li>
              <li>Projeto de CFTV</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧱 Gerenciamento de Obras</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Estudos Preliminares</li>
              <li>Projetos de Arquitetura e de Engenharia</li>
              <li>Aprovação na Prefeitura</li>
              <li>Contratação de Mão de Obra Especializada</li>
              <li>Compras de Materiais</li>
              <li>Controle de Estoque</li>
              <li>Liberação de Serviços</li>
              <li>Fiscalização de Serviços</li>
              <li>Liberação de Pagamentos</li>
              <li>Planejamento Físico-Financeiro da Obra</li>
              <li>Compatibilização de Projetos</li>
              <li>Cronograma de Obra</li>
              <li>Gestão de Documentação Técnica</li>
              <li>Consultoria para Aquisição de Materiais</li>
              <li>Relatórios Semanais ou Quinzenais</li>
              <li>Análise e Controle de Custos</li>
              <li>Reuniões Periódicas com o Cliente</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="clients" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Para Você que vai Construir</h2>
        <p>Oferecemos gerenciamento de obra completo, do início ao fim, com controle técnico, economia de tempo e transparência total.</p>
      </section>

      <section id="partners" className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Para Arquitetos, Engenheiros, Incorporadoras e Construtoras</h2>
        <p>Parcerias estratégicas para projetos hidráulicos e elétricos com excelência técnica, compatibilização de disciplinas e agilidade no atendimento.</p>
      </section>

      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p className="mb-2">E-mail: <a href="mailto:dennereng@gmail.com" className="text-blue-600 underline">dennereng@gmail.com</a></p>
        <p className="mb-2">WhatsApp: <a href="https://wa.me/5511996607360" target="_blank" className="text-blue-600 underline">(11) 99660-7360</a></p>
        <p className="mb-2">Instagram: <a href="https://www.instagram.com/dbarrosengenharia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">@dbarrosengenharia</a></p>
        <p className="mb-4">Atendemos Jundiaí, Itupeva, Cabreúva e região</p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-10 text-sm">
        <p>DBarros Engenharia | DENNER CRISTIAN BARROS LTDA</p>
        <p>CNPJ: 59.092.381/0001-29</p>
        <p>CREA/SP: 5069981015</p>
      </footer>

      <a
        href="https://wa.me/5511996607360?text=Ol%C3%A1%20eng.%20Denner%2C%20eu%20vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}