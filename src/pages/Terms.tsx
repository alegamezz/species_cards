"use client";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-gray-600">
              Última actualización: Noviembre 2025
            </p>
          </div>

          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700">
              Al acceder y utilizar Terrarium Labels, aceptas estar legalmente vinculado por estos 
              términos y condiciones de uso. Si no estás de acuerdo con alguna parte de estos términos, 
              no debes utilizar nuestra plataforma. El uso continuado del servicio constituye la aceptación 
              de estos términos y cualquier modificación futura.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-700 mb-4">
              Terrarium Labels es una plataforma web diseñada específicamente para aficionados a la terrarofilia 
              que proporciona las siguientes funcionalidades:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Crear y gestionar información detallada sobre terrarios personales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Documentar especies de reptiles y anfibios con fichas completas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Generar etiquetas visuales personalizadas de alta calidad</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Organizar y mantener registros de cuidados y alimentación</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Acceder a recursos educativos sobre el cuidado de especies exóticas</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Registro y Cuenta de Usuario
            </h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              3.1 Requisitos de Registro
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Debes proporcionar información veraz, precisa y actualizada durante el registro</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Eres responsable de mantener la confidencialidad de tu contraseña</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No puedes compartir tu cuenta con terceros sin autorización</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Debes notificarnos inmediatamente sobre cualquier uso no autorizado</span>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              3.2 Suspensión y Terminación de Cuenta
            </h3>
            <p className="text-gray-700 mb-2">
              Nos reservamos el derecho de suspender o cancelar tu cuenta si:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Violas estos términos y condiciones</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Realizas actividades fraudulentas o ilegales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Infringes derechos de propiedad intelectual de terceros</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Proporcionas información falsa durante el registro</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 md:p-8 border border-amber-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Uso Aceptable de la Plataforma
            </h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              ✓ Está Permitido
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Uso personal y no comercial para gestionar tus propios terrarios</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Compartir información veraz y educativa sobre especies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Colaborar con la comunidad de forma respetuosa y constructiva</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Descargar tus propias etiquetas generadas</span>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">
              ✗ Está Prohibido
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Subir contenido ilegal, ofensivo, difamatorio o inapropiado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Intentar vulnerar la seguridad o integridad del sistema</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Realizar uso comercial de la plataforma sin autorización previa</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Infringir derechos de propiedad intelectual de terceros</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Utilizar bots, scrapers o herramientas automatizadas no autorizadas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Difundir información falsa o engañosa sobre especies</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Propiedad Intelectual
            </h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              5.1 Contenido de la Plataforma
            </h3>
            <p className="text-gray-700">
              Todo el diseño, código fuente, elementos visuales, logotipos, marcas y contenido original 
              de Terrarium Labels están protegidos por derechos de autor y otras leyes de propiedad 
              intelectual. No puedes copiar, modificar, distribuir o reproducir ningún elemento sin 
              autorización expresa.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              5.2 Contenido Generado por el Usuario
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Conservas todos los derechos sobre el contenido original que subes (imágenes, textos, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Nos otorgas una licencia no exclusiva para mostrar y utilizar tu contenido dentro de la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Garantizas que tienes todos los derechos necesarios sobre el contenido que publicas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Eres responsable de cualquier infracción de derechos de terceros</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 mb-4">
              Terrarium Labels se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos 
              responsables de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Información incorrecta o desactualizada proporcionada por usuarios</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Daños directos o indirectos derivados del uso de la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interrupciones temporales del servicio por mantenimiento o causas técnicas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pérdida de datos por causas técnicas, aunque realizamos copias de seguridad regulares</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Decisiones tomadas basándose en información de la plataforma sin consultar profesionales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Problemas de salud o bienestar de animales derivados del uso de información de la plataforma</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-sm">
                <strong>Aviso importante:</strong> La información proporcionada en esta plataforma tiene fines 
                educativos y de organización. Siempre consulta con veterinarios especializados en exóticos 
                para cuestiones relacionadas con la salud de tus animales.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Disponibilidad del Servicio
            </h2>
            <p className="text-gray-700">
              Aunque nos esforzamos por mantener la plataforma disponible las 24 horas del día, nos reservamos 
              el derecho de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5 mt-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Realizar mantenimientos programados con aviso previo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Efectuar actualizaciones y mejoras del sistema</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Suspender temporalmente el servicio por razones técnicas o de seguridad</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Modificaciones del Servicio y Precios
            </h2>
            <p className="text-gray-700 mb-3">
              Nos reservamos el derecho de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Modificar, añadir o eliminar funcionalidades de la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Actualizar estos términos y condiciones cuando sea necesario</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Introducir planes de pago o suscripciones en el futuro (actualmente gratuito)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Modificar precios con al menos 30 días de aviso previo</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Te notificaremos sobre cambios significativos a través de correo electrónico o mediante 
              avisos destacados en la plataforma.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Cancelación de Cuenta
            </h2>
            <p className="text-gray-700 mb-3">
              Puedes cancelar tu cuenta en cualquier momento desde la configuración de tu perfil o 
              contactándonos directamente. Al cancelar tu cuenta:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Perderás acceso inmediato a todos los servicios</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tus datos personales serán eliminados según nuestra Política de Privacidad</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>El contenido que hayas creado podrá ser eliminado permanentemente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No se realizarán reembolsos por períodos de servicio no utilizados (si aplica)</span>
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Indemnización
            </h2>
            <p className="text-gray-700">
              Aceptas indemnizar y eximir de responsabilidad a Terrarium Labels, sus desarrolladores, 
              colaboradores y afiliados de cualquier reclamación, pérdida, daño, responsabilidad y gasto 
              (incluidos honorarios legales) que surjan de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5 mt-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tu uso de la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tu violación de estos términos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tu infracción de derechos de terceros</span>
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700">
              Estos términos y condiciones se rigen por las leyes de España. Cualquier disputa relacionada 
              con estos términos o el uso de la plataforma se resolverá en los tribunales españoles 
              correspondientes según tu lugar de residencia, de acuerdo con la legislación vigente.
            </p>
            <p className="text-gray-700 mt-4">
              Ambas partes acuerdan someterse a la jurisdicción exclusiva de dichos tribunales.
            </p>
          </section>

          {/* Section 12 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Divisibilidad
            </h2>
            <p className="text-gray-700">
              Si alguna disposición de estos términos se considera inválida o inaplicable, dicha disposición 
              se eliminará o limitará en la medida mínima necesaria, y las disposiciones restantes continuarán 
              en pleno vigor y efecto.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> contact@terrariumlabels.com</p>
              <p><strong>Asunto:</strong> "Consulta sobre Términos y Condiciones"</p>
              <p><strong>Tiempo de respuesta:</strong> 72 horas laborables</p>
            </div>
          </section>

          {/* Acceptance */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 text-center">
              <strong>Al utilizar Terrarium Labels, confirmas que has leído, comprendido y aceptado 
              estos Términos y Condiciones en su totalidad.</strong>
            </p>
          </div>

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
