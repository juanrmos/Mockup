import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [selectedRole, setSelectedRole] = useState<"participant" | "organizer" | "admin">("participant");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const roles = [
    {
      id: "participant",
      label: "Participante",
      icon: "👤",
      description: "Accede a tus inscripciones y certificados.",
      route: "/events",
    },
    {
      id: "organizer",
      label: "Organizador",
      icon: "📅",
      description: "Gestiona eventos y asistencia.",
      route: "/dashboard",
    },
    {
      id: "admin",
      label: "Admin",
      icon: "⚙️",
      description: "Administra usuarios y programas.",
      route: "/dashboard",
    },
  ];

  const handleRoleSelect = (roleId: "participant" | "organizer" | "admin", route: string) => {
    setSelectedRole(roleId);
    // Simulate navigation to role-specific dashboard
    setTimeout(() => {
      navigate(route);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-sigea-bg-light flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Illustration (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Illustration Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 via-sigea-bg-light to-blue-100 flex items-center justify-center opacity-60">
                <div className="text-center">
                  <div className="text-7xl mb-4 animate-bounce" style={{ animationDelay: "0s" }}>
                    📜
                  </div>
                  <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: "0.2s" }}>
                    📱
                  </div>
                  <div className="text-6xl animate-bounce" style={{ animationDelay: "0.4s" }}>
                    📅
                  </div>
                  <p className="text-sigea-text-secondary font-medium mt-8">
                    Gestiona tus eventos y certificados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Panel */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-lg bg-gradient-to-br from-sigea-blue-dark to-blue-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => navigate("/")}
              className="absolute top-6 right-6 p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors z-10 text-gray-300 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Panel Content */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Bienvenido a <span className="text-sigea-blue">SIGEA</span>
                </h1>
                <p className="text-sigea-text-secondary text-sm md:text-body">
                  Inicia sesión o regístrate para gestionar tus eventos y certificados.
                </p>
              </div>

              {/* Segmented Control */}
              <div className="flex gap-2 bg-blue-950 bg-opacity-50 rounded-full p-1 mb-8">
                <button
                  onClick={() => setMode("login")}
                  className={`flex-1 py-2.5 px-4 rounded-full font-medium transition-all duration-200 text-sm ${
                    mode === "login"
                      ? "bg-sigea-blue text-white shadow-lg"
                      : "text-white text-opacity-70 hover:text-opacity-100"
                  }`}
                >
                  Iniciar sesión
                </button>
                <button
                  onClick={() => setMode("register")}
                  className={`flex-1 py-2.5 px-4 rounded-full font-medium transition-all duration-200 text-sm ${
                    mode === "register"
                      ? "bg-sigea-blue text-white shadow-lg"
                      : "text-white text-opacity-70 hover:text-opacity-100"
                  }`}
                >
                  Regístrate
                </button>
              </div>

              {/* Role Selector - Only in Login Mode */}
              {mode === "login" && (
                <div className="mb-8">
                  <label className="block text-xs font-semibold text-sigea-text-secondary uppercase mb-4">
                    Selecciona tu rol
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRoleSelect(role.id as any, role.route);
                        }}
                        className={`p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                          selectedRole === role.id
                            ? "border-sigea-blue bg-sigea-blue bg-opacity-20 shadow-lg shadow-blue-500 shadow-opacity-40 ring-2 ring-sigea-blue ring-opacity-50"
                            : "border-transparent bg-blue-950 bg-opacity-30 hover:shadow-lg hover:bg-opacity-40"
                        }`}
                      >
                        <div className="text-2xl mb-2">{role.icon}</div>
                        <p className="text-white font-medium text-xs mb-1">{role.label}</p>
                        <p className="text-sigea-text-secondary text-xs leading-snug">{role.description}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-sigea-text-secondary mt-3 text-center">
                    Serás redirigido a la página de tu rol.
                  </p>
                </div>
              )}

              {/* Form */}
              <form className="space-y-4 mb-6">
                {mode === "login" ? (
                  <>
                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="usuario@unas.edu.pe"
                        className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground"
                      />
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Contraseña <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                      <a href="#" className="text-sigea-blue text-sm font-medium hover:underline">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-sigea-blue text-white font-semibold py-3 md:py-3.5 rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 mt-6">
                      Iniciar sesión
                    </button>
                  </>
                ) : (
                  <>
                    {/* Full Name Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Juan Alberto Rodríguez"
                        className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground"
                      />
                    </div>

                    {/* DNI Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        DNI <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12345678"
                        className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="usuario@unas.edu.pe"
                        className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground"
                      />
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Contraseña <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Confirmar contraseña <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 md:py-3.5 bg-white rounded-2xl border-2 border-sigea-border-light focus:border-sigea-blue focus:outline-none transition-colors placeholder-gray-400 text-foreground pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-foreground transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-sigea-blue text-white font-semibold py-3 md:py-3.5 rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 mt-6">
                      Registrarse
                    </button>
                  </>
                )}
              </form>

              {/* Footer Text */}
              <p className="text-center text-sigea-text-secondary text-xs">
                {mode === "login" ? (
                  <>
                    ¿No tienes cuenta?{" "}
                    <button
                      onClick={() => setMode("register")}
                      className="text-sigea-blue font-semibold hover:underline"
                    >
                      Regístrate aquí
                    </button>
                  </>
                ) : (
                  <>
                    ¿Ya tienes cuenta?{" "}
                    <button
                      onClick={() => setMode("login")}
                      className="text-sigea-blue font-semibold hover:underline"
                    >
                      Inicia sesión
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Illustration - Shown below on mobile */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
    </div>
  );
}
