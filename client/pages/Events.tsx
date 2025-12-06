import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  const allEvents = [
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
    {
      id: 4,
      title: "Seminario de Innovación Tecnológica",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=281&fit=crop",
      date: "18 - 22 Abr 2025",
      time: "15:00 - 17:00 h",
      modality: "Virtual",
      price: "S/ 120.00",
    },
    {
      id: 5,
      title: "Diplomado en Gestión Agrícola Sostenible",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=281&fit=crop",
      date: "25 Abr - 30 May 2025",
      time: "09:00 - 12:00 h",
      modality: "Presencial",
      price: "S/ 350.00",
    },
    {
      id: 6,
      title: "Taller de Metodología de Investigación",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=281&fit=crop",
      date: "02 - 06 May 2025",
      time: "10:00 - 12:00 h",
      modality: "Presencial",
      price: "S/ 100.00",
    },
  ];

  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sigea-blue to-blue-500 text-white py-12 md:py-16">
        <div className="container-max px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Todos nuestros eventos</h1>
          <p className="text-blue-100 max-w-2xl">
            Explora nuestra completa oferta académica de cursos, talleres y conferencias.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <main className="flex-1 section-spacing">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
