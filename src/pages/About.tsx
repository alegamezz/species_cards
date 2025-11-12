"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Acerca de Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tu plataforma especializada en gestión de terrarios y especies exóticas
            </p>
          </div>

          {/* Mission */}
          <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Proporcionar herramientas digitales intuitivas y profesionales para aficionados a la terrarofilia, 
              ayudándoles a organizar, documentar y compartir información sobre sus colecciones de terrarios 
              y las especies que cuidan con pasión.
            </p>
          </section>

          {/* What We Offer */}
          <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              ¿Qué Ofrecemos?
            </h2>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Gestión visual de terrarios mediante etiquetas personalizadas de alta calidad
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Información detallada sobre especies de reptiles y anfibios
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Herramientas para documentar el cuidado y mantenimiento diario
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Recursos educativos para la comunidad de terrariofilos
                </p>
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border border-green-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Convertirnos en la plataforma de referencia para la comunidad hispanohablante de terrariofilos, 
              facilitando el intercambio de conocimientos y promoviendo las mejores prácticas en el cuidado 
              responsable de reptiles y anfibios en cautividad.
            </p>
          </section>

          {/* Technology */}
          <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Tecnología
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Desarrollado con las últimas tecnologías web para garantizar una experiencia rápida, 
              segura y responsive en todos tus dispositivos:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              © 2025 Terrarium Labels. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
