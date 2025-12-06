import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Programas", href: "/programs" },
    { label: "Certificados", href: "/certificates" },
    { label: "Nosotros", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sigea-border-light shadow-sigea-soft">
      <div className="container-max">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sigea-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-sigea-blue-dark hidden sm:inline">
              SIGEA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground font-medium hover:text-sigea-blue transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="btn-secondary text-sm px-4 py-2"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm px-6 py-2"
            >
              Crear cuenta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-sigea-blue-dark" />
            ) : (
              <Menu className="w-6 h-6 text-sigea-blue-dark" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-sigea-border-light bg-white">
            <div className="flex flex-col gap-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground font-medium hover:text-sigea-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-sigea-border-light">
                <Link
                  to="/login"
                  className="btn-secondary text-sm w-full text-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary text-sm w-full text-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
