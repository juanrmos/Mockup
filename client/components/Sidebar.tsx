import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Calendar,
  Users,
  Award,
  ExternalLink,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  activePage?: "dashboard" | "activities" | "participants" | "certificates";
}

export default function Sidebar({ activePage = "dashboard" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: Home, href: "/dashboard" },
    {
      id: "activities",
      label: "Gestión de Actividades",
      icon: Calendar,
      href: "/dashboard/activities",
    },
    {
      id: "participants",
      label: "Participantes y Asistencia",
      icon: Users,
      href: "/dashboard/participants",
    },
    { id: "certificates", label: "Certificación", icon: Award, href: "/dashboard/certificates" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-sigea-blue-dark" />
        ) : (
          <Menu className="w-6 h-6 text-sigea-blue-dark" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 md:w-60 bg-gradient-to-b from-sigea-blue-dark to-blue-950 text-white z-40 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Logo & User Section */}
        <div className="p-6 border-b border-white border-opacity-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-sigea-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">SIGEA</span>
          </Link>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sigea-blue flex items-center justify-center text-white font-semibold text-sm">
              JR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Juan Rodríguez</p>
              <p className="text-xs text-gray-300">Organizador</p>
            </div>
          </div>

          {/* Account Dropdown */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full mt-4 flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors"
          >
            <span className="text-xs font-medium text-gray-300">Cuenta</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-300 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-sigea-blue bg-opacity-20 text-white border-l-4 border-sigea-blue"
                        : "text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Separator */}
        <div className="mx-4 my-6 border-t border-white border-opacity-10" />

        {/* Footer Section */}
        <div className="p-4 space-y-3">
          {/* Preview Button */}
          <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors text-white text-sm font-medium">
            <span>Vista previa del sitio</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Logout Link */}
          <button className="w-full flex items-center gap-2 px-4 py-2 text-red-300 hover:text-red-200 transition-colors text-sm">
            <LogOut className="w-4 h-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}
