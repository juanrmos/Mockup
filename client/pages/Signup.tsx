import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    Únete a SIGEA hoy
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
                  Únete a <span className="text-sigea-blue">SIGEA</span>
                </h1>
                <p className="text-sigea-text-secondary text-sm md:text-body">
                  Crea tu cuenta y comienza a gestionar tus eventos y certificados.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4 mb-6">
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
              </form>

              {/* Terms */}
              <p className="text-center text-sigea-text-secondary text-xs mb-4">
                Al registrarte, aceptas nuestros{" "}
                <a href="#" className="text-sigea-blue font-semibold hover:underline">
                  términos de servicio
                </a>
                {" "}y{" "}
                <a href="#" className="text-sigea-blue font-semibold hover:underline">
                  política de privacidad
                </a>
                .
              </p>

              {/* Login Link */}
              <p className="text-center text-sigea-text-secondary text-xs">
                ¿Ya tienes cuenta?{" "}
                <a
                  href="/login"
                  className="text-sigea-blue font-semibold hover:underline"
                >
                  Inicia sesión
                </a>
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
