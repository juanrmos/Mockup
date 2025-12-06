import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";
import {
  Plus,
  Calendar,
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  Eye,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function OrganizerDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // KPI Data
  const kpis = [
    {
      label: "Actividades activas",
      value: "12",
      icon: Calendar,
      trend: "+5% vs mes pasado",
    },
    {
      label: "Inscritos totales",
      value: "1.234",
      icon: Users,
      trend: "+12% vs mes pasado",
    },
    {
      label: "Certificados emitidos",
      value: "856",
      icon: Award,
      trend: "+8% vs mes pasado",
    },
    {
      label: "Eventos este mes",
      value: "8",
      icon: TrendingUp,
      trend: "+3 eventos",
    },
  ];

  // Quick Actions
  const quickActions = [
    {
      title: "Crear nueva actividad",
      icon: Plus,
      description: "Configura y publica un nuevo evento o curso.",
    },
    {
      title: "Ver inscripciones",
      icon: Users,
      description: "Consulta la lista completa de participantes.",
    },
    {
      title: "Gestionar asistencia",
      icon: CheckCircle,
      description: "Registra y valida asistencia de eventos.",
    },
  ];

  // Recent Activities
  const recentActivities = [
    {
      name: "Curso Avanzado de Sostenibilidad",
      date: "15 - 20 Mar 2025",
      status: "Activa",
      statusColor: "bg-green-100 text-sigea-green",
    },
    {
      name: "Taller de Investigación Científica",
      date: "22 - 26 Mar 2025",
      status: "Borrador",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Conferencia de Agroecología",
      date: "10 - 12 Abr 2025",
      status: "Activa",
      statusColor: "bg-green-100 text-sigea-green",
    },
    {
      name: "Seminario de Innovación",
      date: "18 - 22 Abr 2025",
      status: "Finalizada",
      statusColor: "bg-gray-100 text-gray-600",
    },
  ];

  // Recent Inscriptions
  const recentInscriptions = [
    {
      participant: "María García López",
      activity: "Curso Avanzado de Sostenibilidad",
      time: "10:30 AM",
      date: "Hoy",
    },
    {
      participant: "Carlos Mendoza Ruiz",
      activity: "Taller de Investigación",
      time: "09:15 AM",
      date: "Hoy",
    },
    {
      participant: "Ana Fernández Torres",
      activity: "Curso Avanzado de Sostenibilidad",
      time: "02:45 PM",
      date: "Ayer",
    },
    {
      participant: "Roberto Sánchez Pérez",
      activity: "Conferencia de Agroecología",
      time: "11:20 AM",
      date: "Ayer",
    },
  ];

  return (
    <div className="flex h-screen bg-sigea-bg-light overflow-hidden">
      {/* Sidebar */}
      <Sidebar activePage="dashboard" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden md:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-sigea-border-light px-6 md:px-8 py-6 md:py-7 shadow-sigea-soft">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-sigea-blue-dark mb-2">
                Panel de Control
              </h1>
              <p className="text-sm text-sigea-text-secondary">
                Inicio / Dashboard
              </p>
            </div>
            <button className="btn-primary hidden md:flex ml-4 whitespace-nowrap">
              <Plus className="w-4 h-4 mr-2" />
              Crear actividad
            </button>
          </div>
          {/* Mobile CTA */}
          <button className="md:hidden w-full mt-4 btn-primary justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Crear actividad
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
            {/* Section 1: KPIs */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, index) => {
                  const Icon = kpi.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sigea-soft hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-sigea-blue" />
                        </div>
                      </div>
                      <p className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-2">
                        {kpi.value}
                      </p>
                      <p className="text-sm md:text-body text-sigea-text-secondary mb-3">
                        {kpi.label}
                      </p>
                      <p className="text-xs text-sigea-green font-medium">
                        {kpi.trend}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 2: Quick Actions */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-sigea-blue-dark mb-6">
                Acciones rápidas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className="bg-white rounded-2xl p-6 text-left hover:shadow-lg hover:border-sigea-blue transition-all duration-300 border-2 border-sigea-border-light group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-sigea-blue group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6 text-sigea-blue group-hover:text-white" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-sigea-border-light group-hover:text-sigea-blue transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-sigea-blue-dark mb-2">
                        {action.title}
                      </h3>
                      <p className="text-sm text-sigea-text-secondary">
                        {action.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Section 3: Recent Activity */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-white rounded-2xl p-6 shadow-sigea-soft">
                  <h2 className="text-xl font-semibold text-sigea-blue-dark mb-6">
                    Actividades recientes
                  </h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between p-4 hover:bg-sigea-bg-light rounded-lg transition-colors duration-300 border-b border-sigea-border-light last:border-0"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm md:text-body font-medium text-sigea-blue-dark truncate">
                            {activity.name}
                          </p>
                          <p className="text-xs md:text-body-sm text-sigea-text-secondary mt-1">
                            {activity.date}
                          </p>
                          <div className="mt-2">
                            <span
                              className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${activity.statusColor}`}
                            >
                              {activity.status}
                            </span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sigea-blue text-xs font-semibold hover:underline ml-4 whitespace-nowrap"
                        >
                          Ver detalle
                        </a>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="block mt-6 text-sigea-blue font-semibold text-sm hover:underline">
                    Ver todas →
                  </a>
                </div>

                {/* Recent Inscriptions */}
                <div className="bg-white rounded-2xl p-6 shadow-sigea-soft">
                  <h2 className="text-xl font-semibold text-sigea-blue-dark mb-6">
                    Inscripciones recientes
                  </h2>
                  <div className="space-y-4">
                    {recentInscriptions.map((inscription, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between p-4 hover:bg-sigea-bg-light rounded-lg transition-colors duration-300 border-b border-sigea-border-light last:border-0"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm md:text-body font-medium text-sigea-blue-dark truncate">
                            {inscription.participant}
                          </p>
                          <p className="text-xs md:text-body-sm text-sigea-text-secondary mt-1 truncate">
                            {inscription.activity}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {inscription.date} - {inscription.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="block mt-6 text-sigea-blue font-semibold text-sm hover:underline">
                    Ver reporte completo →
                  </a>
                </div>
              </div>
            </section>
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
