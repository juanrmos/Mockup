import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  Star,
  Zap,
  Award,
  Users,
} from "lucide-react";

export default function Index() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Curso Avanzado de Sostenibilidad Ambiental",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=281&fit=crop",
      date: "15 - 20 Mar 2025",
      time: "14:00 - 16:00 h",
      modality: "Presencial",
      price: "S/ 150.00",
    },
    {
      id: 2,
      title: "Taller de Investigación Científica",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=281&fit=crop",
      date: "22 - 26 Mar 2025",
      time: "10:00 - 12:00 h",
      modality: "Virtual",
      price: "S/ 80.00",
    },
    {
      id: 3,
      title: "Conferencia Internacional de Agroecología",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=281&fit=crop",
      date: "10 - 12 Abr 2025",
      time: "09:00 - 13:00 h",
      modality: "Híbrido",
      price: "Desde S/ 50.00",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Elige un evento",
      description: "Explora programas, cursos, talleres y conferencias vigentes.",
      icon: "📋",
    },
    {
      number: 2,
      title: "Inscríbete y paga",
      description: "Completa tus datos y paga en línea o en caja.",
      icon: "💳",
    },
    {
      number: 3,
      title: "Confirma tu asistencia",
      description: "Recibe tu QR de registro y accede al evento.",
      icon: "✅",
    },
    {
      number: 4,
      title: "Obtén tu certificado",
      description: "Se genera automáticamente al finalizar.",
      icon: "🎓",
    },
  ];

  const testimonials = [
    {
      name: "Juan A.",
      role: "Estudiante",
      event: "Ciclo VII 2025",
      quote: "La plataforma es muy fácil de usar. Me permitió inscribirme en solo 5 minutos.",
      rating: 5,
    },
    {
      name: "María G.",
      role: "Profesional",
      event: "Curso de Sostenibilidad",
      quote: "Excelente experiencia. El certificado digital fue muy útil para mis credenciales.",
      rating: 5,
    },
    {
      name: "Carlos M.",
      role: "Investigador",
      event: "Conferencia Científica",
      quote: "El sistema de pago fue seguro y rápido. Muy recomendado.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-sigea-bg-light section-spacing">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-sigea-blue-dark mb-6 leading-tight">
                Inscríbete y paga tus eventos académicos en minutos.
              </h1>
              <p className="text-body text-sigea-text-secondary mb-8 max-w-lg">
                Cursos, talleres y conferencias de la UNAS con certificados digitales QR y validación automática.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sigea-green flex-shrink-0 mt-1" />
                  <span className="text-body text-foreground">
                    Inscripción 100% virtual desde cualquier dispositivo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sigea-green flex-shrink-0 mt-1" />
                  <span className="text-body text-foreground">
                    Pagos en línea o en caja con estado actualizado.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sigea-green flex-shrink-0 mt-1" />
                  <span className="text-body text-foreground">
                    Certificados digitales con QR y verificación inmediata.
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events" className="btn-primary">
                  Explorar eventos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/certificates" className="btn-ghost">
                  Validar certificado
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-sigea-blue to-blue-300 rounded-3xl opacity-10"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-sigea-blue mx-auto mb-4 opacity-80" />
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-sigea-text-secondary font-medium">Certificados Digitales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SIGEA Works Section */}
      <section className="section-spacing bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-4">
              Cómo funciona SIGEA
            </h2>
            <p className="text-body text-sigea-text-secondary max-w-2xl mx-auto">
              Un proceso simple en 4 pasos para inscribirte en tus eventos académicos favoritos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-sigea-bg-light rounded-2xl p-6 md:p-8 hover:shadow-sigea-soft transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-sigea-blue text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-h3 font-semibold text-sigea-blue-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-body-sm text-sigea-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs and Events Section */}
      <section className="section-spacing bg-sigea-bg-light">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-4">
              Programas y eventos
            </h2>
            <p className="text-body text-sigea-text-secondary max-w-2xl mx-auto">
              Explora nuestra oferta académica de cursos, talleres y conferencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-sigea-soft hover:border-sigea-blue transition-all duration-300 border border-sigea-border-light group"
              >
                {/* Image */}
                <div className="overflow-hidden aspect-video bg-gray-200 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-h3 font-semibold text-sigea-blue-dark mb-4 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6 text-sm text-sigea-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sigea-blue flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sigea-blue flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sigea-blue flex-shrink-0" />
                      <span className="px-2 py-1 bg-blue-50 text-sigea-blue rounded-full text-xs font-medium">
                        {event.modality}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-sigea-border-light">
                    <p className="text-sm text-sigea-text-secondary">Desde</p>
                    <p className="text-2xl font-bold text-sigea-blue">{event.price}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/events/${event.id}`}
                    className="w-full btn-primary justify-center text-sm mb-2"
                  >
                    Ver evento
                  </Link>
                  <a
                    href="#"
                    className="w-full text-center text-sm text-sigea-blue font-medium hover:underline transition-colors py-2"
                  >
                    Ver afiche completo →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events" className="btn-primary">
              Ver todos los eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-body text-sigea-text-secondary max-w-2xl mx-auto">
              Experiencias reales de estudiantes y profesionales que confían en SIGEA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sigea-bg-light rounded-2xl p-6 md:p-8 hover:shadow-sigea-soft transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-sigea-blue text-sigea-blue"
                          : "text-sigea-border-light"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-body text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sigea-blue text-white flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-sigea-text-secondary">
                      {testimonial.role} · {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-spacing bg-gradient-to-br from-sigea-blue to-blue-600 text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra misión</h2>
            <p className="text-body mb-10 text-blue-100 leading-relaxed">
              Transformar la experiencia académica de los estudiantes y profesionales de la UNAS, 
              simplificando la inscripción a eventos educativos y proporcionando certificados digitales 
              confiables y verificables.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Inscripción online</h3>
                <p className="text-sm text-blue-100">
                  Acceso 24/7 desde cualquier dispositivo
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Pagos integrados</h3>
                <p className="text-sm text-blue-100">
                  Múltiples métodos seguros y confiables
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <Award className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Certificados con QR</h3>
                <p className="text-sm text-blue-100">
                  Verificación inmediata y automática
                </p>
              </div>
            </div>

            {/* Final CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-sigea-blue rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
              >
                Explorar eventos
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
