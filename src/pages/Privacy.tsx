"use client";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Política de Privacidad
            </h1>
            <p className="text-lg text-gray-600">
              Última actualización: Noviembre 2025
            </p>
          </div>

          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Responsable del Tratamiento
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Terrarium Labels</p>
              <p>Desarrollador: Tu Nombre</p>
              <p>Contacto: contact@terrariumlabels.com</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Datos que Recopilamos
            </h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              2.1 Información que Proporcionas
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Datos de registro (nombre, email) si creas una cuenta</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Información sobre tus terrarios y especies que añades</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Imágenes que subes a la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Preferencias de configuración y personalización</span>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">
              2.2 Información Automática
            </h3>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cookies y tecnologías similares de seguimiento</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dirección IP y datos de conexión</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Datos de navegación y uso de la aplicación</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tipo de dispositivo y navegador utilizado</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Finalidad del Tratamiento
            </h2>
            <p className="text-gray-700 mb-3">
              Utilizamos tus datos personales para los siguientes propósitos:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Proporcionar y mejorar nuestros servicios de gestión de terrarios</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gestionar tu cuenta de usuario y preferencias</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Enviar comunicaciones relacionadas con el servicio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Analizar el uso de la plataforma para mejoras</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cumplir con obligaciones legales aplicables</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Base Legal del Tratamiento
            </h2>
            <p className="text-gray-700 mb-3">
              El tratamiento de tus datos personales se fundamenta en:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Consentimiento:</strong> Tu aceptación expresa al registrarte y usar la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Ejecución contractual:</strong> Necesario para proporcionar los servicios solicitados</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Interés legítimo:</strong> Mejorar la experiencia de usuario y seguridad</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Conservación de Datos
            </h2>
            <p className="text-gray-700">
              Conservaremos tus datos personales durante el tiempo que:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5 mt-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mantengas activa tu cuenta en la plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sean necesarios para cumplir los fines descritos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Lo requiera la legislación vigente española y europea</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Una vez eliminada tu cuenta, tus datos serán borrados de forma segura dentro de un plazo máximo de 30 días.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Tus Derechos como Usuario
            </h2>
            <p className="text-gray-700 mb-4">
              Tienes derecho a ejercer los siguientes derechos en cualquier momento:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Acceso:</strong> Consultar tus datos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Rectificación:</strong> Corregir datos inexactos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Supresión:</strong> Eliminar tus datos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Limitación:</strong> Restringir el tratamiento</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Oposición:</strong> Oponerte al tratamiento</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Portabilidad:</strong> Recibir tus datos</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-gray-700">
                <strong>Para ejercer tus derechos, contacta:</strong> contact@terrariumlabels.com
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Seguridad de los Datos
            </h2>
            <p className="text-gray-700">
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales 
              contra acceso no autorizado, pérdida, alteración o divulgación. Esto incluye:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5 mt-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cifrado de datos sensibles mediante protocolos SSL/TLS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Almacenamiento seguro en servidores protegidos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Acceso restringido solo a personal autorizado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Auditorías regulares de seguridad</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Uso de Cookies
            </h2>
            <p className="text-gray-700 mb-3">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra plataforma. 
              Las cookies nos ayudan a:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mantener tu sesión activa</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Recordar tus preferencias y configuraciones</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Analizar el uso de la plataforma</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede limitar algunas funcionalidades.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Compartición de Datos con Terceros
            </h2>
            <p className="text-gray-700 mb-3">
              No vendemos ni compartimos tus datos personales con terceros para fines comerciales. 
              Solo compartimos información cuando:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sea necesario para proporcionar el servicio (proveedores de hosting)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Lo requiera una obligación legal</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hayas dado tu consentimiento explícito</span>
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Cambios en la Política de Privacidad
            </h2>
            <p className="text-gray-700">
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. 
              Te notificaremos sobre cambios significativos a través de correo electrónico o mediante 
              un aviso destacado en la plataforma. La fecha de última actualización siempre aparecerá 
              en la parte superior de este documento.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Legislación Aplicable
            </h2>
            <p className="text-gray-700">
              Esta política de privacidad se rige por la legislación española y europea, específicamente:
            </p>
            <ul className="space-y-2 text-gray-700 ml-5 mt-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reglamento General de Protección de Datos (RGPD - UE 2016/679)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE)</span>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, 
              no dudes en contactarnos:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> contact@terrariumlabels.com</p>
              <p><strong>Respuesta:</strong> En un plazo máximo de 72 horas</p>
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
