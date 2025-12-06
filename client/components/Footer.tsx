import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sigea-blue-dark text-white">
      <div className="container-max px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sigea-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold">SIGEA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Plataforma educativa de gestión e inscripción a eventos académicos de la UNAS.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Plataforma</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/programs" className="hover:text-sigea-blue transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-sigea-blue transition-colors">
                  Certificados
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-sigea-blue transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-sigea-blue transition-colors">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sigea-blue transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sigea-blue transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 SIGEA - Universidad Nacional Agraria de la Selva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
