import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  FileText,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [isSaved, setIsSaved] = useState(false);

  // Mock event data
  const event = {
    id,
    title: "Curso Avanzado de Sostenibilidad Ambiental",
    subtitle: "Aprende estrategias modernas de sostenibilidad aplicadas a la agricultura.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    date: "15 - 20 de Marzo 2025",
    time: "14:00 - 16:00 h",
    location: "Campus UNAS - Sala Multiusos",
    modality: "Presencial",
    capacity: "50 participantes",
    instructors: "Dr. Juan Pérez, Dra. María González",
    prices: [
      { type: "Estudiantes UNAS", price: "S/ 80.00" },
      { type: "Profesionales", price: "S/ 150.00" },
      { type: "General", price: "S/ 200.00" },
    ],
    includes: [
      "Certificado digital con QR",
      "Materiales de estudio en PDF",
      "Acceso completo a grabaciones",
      "Soporte por email",
    ],
    sections: [
      {
        title: "Conferencia 1: Fundamentos de Sostenibilidad",
        instructor: "Dr. Juan Pérez",
        time: "14:00 - 14:45 h",
        description: "Introducción a los principios fundamentales de la sostenibilidad ambiental.",
      },
      {
        title: "Conferencia 2: Prácticas Agrícolas Sostenibles",
        instructor: "Dra. María González",
        time: "14:45 - 15:30 h",
        description: "Estudio de casos y mejores prácticas en agricultura sostenible.",
      },
      {
        title: "Panel de Discusión",
        instructor: "Moderado por expertos",
        time: "15:30 - 16:00 h",
        description: "Oportunidad para preguntas y diálogo con los instructores.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />

      {/* Back Button */}
      <div className="section-spacing-sm border-b border-sigea-border-light">
        <div className="container-max px-4 md:px-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sigea-blue font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a eventos
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="section-spacing">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Event Details */}
              <div className="lg:col-span-2">
                {/* Title and Subtitle */}
                <h1 className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-3">
                  {event.title}
                </h1>
                <p className="text-body text-sigea-text-secondary mb-8">
                  {event.subtitle}
                </p>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                        Fecha
                      </p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-sigea-blue flex-shrink-0" />
                        <span className="font-medium text-foreground">{event.date}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                        Hora
                      </p>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-sigea-blue flex-shrink-0" />
                        <span className="font-medium text-foreground">{event.time}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                        Modalidad
                      </p>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-sigea-blue flex-shrink-0" />
                        <span className="font-medium text-foreground">{event.modality}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                        Capacidad
                      </p>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-sigea-blue flex-shrink-0" />
                        <span className="font-medium text-foreground">{event.capacity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-blue-100">
                    <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                      Instructores
                    </p>
                    <p className="font-medium text-foreground">{event.instructors}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                  <div className="flex gap-4 border-b border-sigea-border-light mb-6">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`pb-4 font-medium transition-colors ${
                        activeTab === "overview"
                          ? "text-sigea-blue border-b-2 border-sigea-blue"
                          : "text-sigea-text-secondary hover:text-foreground"
                      }`}
                    >
                      Descripción
                    </button>
                    <button
                      onClick={() => setActiveTab("sessions")}
                      className={`pb-4 font-medium transition-colors ${
                        activeTab === "sessions"
                          ? "text-sigea-blue border-b-2 border-sigea-blue"
                          : "text-sigea-text-secondary hover:text-foreground"
                      }`}
                    >
                      Sesiones
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <div className="prose prose-sm max-w-none">
                      <p className="text-body text-foreground mb-6">
                        Este curso te proporciona las herramientas necesarias para implementar 
                        estrategias de sostenibilidad en proyectos agrícolas. Aprenderás de expertos 
                        en el campo y tendrás la oportunidad de interactuar con profesionales de la industria.
                      </p>
                      <h3 className="text-h3 font-semibold text-sigea-blue-dark mt-6 mb-3">
                        ¿Qué incluye?
                      </h3>
                      <ul className="space-y-2">
                        {event.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-sigea-green flex-shrink-0" />
                            <span className="text-body text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "sessions" && (
                    <div className="space-y-4">
                      {event.sections.map((section, i) => (
                        <div
                          key={i}
                          className="bg-white border border-sigea-border-light rounded-xl p-6"
                        >
                          <h4 className="font-semibold text-foreground mb-2">
                            {section.title}
                          </h4>
                          <p className="text-sm text-sigea-text-secondary mb-3">
                            {section.instructor} · {section.time}
                          </p>
                          <p className="text-body text-foreground">
                            {section.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                {/* Price Card */}
                <div className="bg-white border border-sigea-border-light rounded-2xl p-6 sticky top-20 mb-6">
                  <h3 className="text-h3 font-semibold text-sigea-blue-dark mb-4">
                    Precios
                  </h3>

                  <div className="space-y-3 mb-6">
                    {event.prices.map((price, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-sigea-bg-light rounded-lg"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {price.type}
                        </span>
                        <span className="font-bold text-sigea-blue">{price.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-4">
                    <button className="w-full btn-primary justify-center">
                      Inscribirme
                    </button>
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className="w-full btn-secondary justify-center gap-2"
                    >
                      <Heart
                        className={`w-4 h-4 ${isSaved ? "fill-sigea-blue" : ""}`}
                      />
                      {isSaved ? "Guardado" : "Guardar evento"}
                    </button>
                  </div>

                  {/* Trust Message */}
                  <p className="text-xs text-sigea-text-secondary text-center pt-4 border-t border-sigea-border-light">
                    ✓ Pago seguro · Soporte UNAS · Confirmación inmediata
                  </p>

                  {/* Payment Methods */}
                  <div className="mt-4 pt-4 border-t border-sigea-border-light">
                    <p className="text-xs text-sigea-text-secondary font-semibold mb-3">
                      Métodos de pago
                    </p>
                    <div className="flex gap-2 justify-center flex-wrap">
                      <span className="text-xs bg-sigea-bg-light px-3 py-1 rounded-full font-medium text-foreground">
                        Yape
                      </span>
                      <span className="text-xs bg-sigea-bg-light px-3 py-1 rounded-full font-medium text-foreground">
                        Plin
                      </span>
                      <span className="text-xs bg-sigea-bg-light px-3 py-1 rounded-full font-medium text-foreground">
                        Caja
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
