import React from 'react';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Honório Leão, Qd. 71 Lt. 04',
      subcontent: 'Morada do Sol, Rio Verde - GO'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(64) 99268-8158',
      subcontent: 'WhatsApp disponível'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@rei_do_acm',
      subcontent: 'Siga nossas novidades'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda à Sexta: 08h às 18h',
      subcontent: 'Sábado: 08h às 12h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta para 
            transformar seu projeto em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                      <p className="text-gray-400 text-xs">{info.subcontent}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Solicite um Orçamento</h4>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco via WhatsApp para receber um orçamento 
                personalizado para seu projeto.
              </p>
              <a 
                href="https://wa.me/5564992688158?text=Olá! Gostaria de solicitar um orçamento para meu projeto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                Solicitar Orçamento via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-8">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                    placeholder="(64) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Serviço de Interesse
                </label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="fachadas">Fachadas em ACM</option>
                  <option value="letreiros">Letreiros em acrílico iluminado</option>
                  <option value="esquadrias">Esquadrias de alumínio</option>
                  <option value="coberturas">Coberturas em policarbonato</option>
                  <option value="letras-caixa">Letras caixa em PVC</option>
                  <option value="estruturas">Estruturas metálicas</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;