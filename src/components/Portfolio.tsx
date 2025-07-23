import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Fachada ACM Comercial',
      category: 'Fachadas',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Frei_do_acm%2F&psig=AOvVaw0E__K3WsTAzjsSAMpNc4aV&ust=1753401128918000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiEv62W1I4DFQAAAAAdAAAAABAE
      description: 'Fachada moderna em ACM com acabamento impecável'
    },
    {
      title: 'Letreiro Iluminado',
      category: 'Comunicação Visual',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Letreiro em acrílico com iluminação LED'
    },
    {
      title: 'Esquadria de Alumínio',
      category: 'Esquadrias',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Portas e janelas em alumínio de alta qualidade'
    },
    {
      title: 'Cobertura Policarbonato',
      category: 'Coberturas',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cobertura translúcida para área comercial'
    },
    {
      title: 'Fachada Ripado',
      category: 'Fachadas',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fachada com padrão ripado moderno'
    },
    {
      title: 'Estrutura Metálica',
      category: 'Estruturas',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Estrutura em metalon galvanizado'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nosso <span className="text-orange-500">Portfólio</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos projetos executados com excelência e precisão técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                    <ExternalLink size={16} />
                    Ver detalhes
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-500 text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
