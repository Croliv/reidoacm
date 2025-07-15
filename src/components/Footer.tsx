import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Rei do <span className="text-orange-500">ACM</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Especialistas em fachadas, esquadrias de alumínio e comunicação visual. 
              Qualidade e inovação em cada projeto.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 38.076.305/0001-50
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-300">Rua Honório Leão, Qd. 71 Lt. 04</p>
                  <p className="text-gray-400 text-sm">Morada do Sol, Rio Verde - GO</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500" />
                <a 
                  href="tel:+5564992688158" 
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  (64) 99268-8158
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={20} className="text-orange-500" />
                <a 
                  href="https://instagram.com/rei_do_acm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  @rei_do_acm
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rei do ACM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;