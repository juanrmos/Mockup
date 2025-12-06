import Sidebar from "@/components/Sidebar";
import { Plus } from "lucide-react";

export default function DashboardActivities() {
  return (
    <div className="flex h-screen bg-sigea-bg-light overflow-hidden">
      <Sidebar activePage="activities" />

      <main className="flex-1 flex flex-col overflow-hidden md:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-sigea-border-light px-6 md:px-8 py-6 md:py-7 shadow-sigea-soft">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-sigea-blue-dark mb-2">
                Gestión de Actividades
              </h1>
              <p className="text-sm text-sigea-text-secondary">
                Inicio / Gestión de Actividades
              </p>
            </div>
            <button className="btn-primary hidden md:flex ml-4 whitespace-nowrap">
              <Plus className="w-4 h-4 mr-2" />
              Nueva actividad
            </button>
          </div>
          <button className="md:hidden w-full mt-4 btn-primary justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Nueva actividad
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sigea-soft">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-sigea-blue-dark mb-2">
                Gestión de Actividades
              </h2>
              <p className="text-sigea-text-secondary mb-6">
                Aquí podrás crear, editar y gestionar todas tus actividades y eventos académicos.
              </p>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Crear primera actividad
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-sigea-border-light py-8 px-6 md:px-8">
            <p className="text-center text-sm text-sigea-text-secondary">
              © 2025 SIGEA - Gestión Académica y Certificación Digital
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
