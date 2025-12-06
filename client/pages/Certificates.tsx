import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const certificates = [
    {
      id: 1,
      title: "Sostenibilidad Ambiental",
      description: "Curso avanzado en sostenibilidad ambiental y prácticas agrícolas sostenibles.",
      date: "20 Marzo 2025",
      level: "Intermedio",
      verified: true,
    },
    {
      id: 2,
      title: "Investigación Científica",
      description: "Taller práctico de metodología de investigación científica.",
      date: "26 Marzo 2025",
      level: "Avanzado",
      verified: true,
    },
    {
      id: 3,
      title: "Innovación Tecnológica",
      description: "Seminario sobre innovación tecnológica en agricultura.",
      date: "22 Abril 2025",
      level: "Intermedio",
      verified: false,
    },
  ];

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sigea-blue to-blue-500 text-white section-spacing">
        <div className="container-max px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Validación y emisión de certificados
          </h1>
          <p className="text-blue-100 text-body max-w-2xl">
            Selecciona un programa y verifica tu certificado digital con seguridad.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-spacing">
        <div className="container-max px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sigea-text-secondary" />
              <input
                type="text"
                placeholder="Buscar por nombre de evento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-sigea-border-light rounded-lg focus:border-sigea-blue focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert.id.toString())}
                  className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                    selectedCertificate === cert.id.toString()
                      ? "border-sigea-blue shadow-sigea-soft"
                      : "border-sigea-border-light hover:border-sigea-blue"
                  }`}
                >
                  {/* Status Badge */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs bg-sigea-bg-light px-3 py-1 rounded-full font-medium text-sigea-text-secondary">
                      Certificado
                    </span>
                    {cert.verified && (
                      <CheckCircle className="w-4 h-4 text-sigea-green" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-h3 font-semibold text-sigea-blue-dark mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-body-sm text-sigea-text-secondary mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6 py-4 border-y border-sigea-border-light">
                    <div className="flex justify-between text-sm">
                      <span className="text-sigea-text-secondary">Fecha:</span>
                      <span className="font-medium text-foreground">{cert.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-sigea-text-secondary">Nivel:</span>
                      <span className="font-medium text-foreground">{cert.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-sigea-text-secondary">Estado:</span>
                      <span
                        className={`font-medium ${
                          cert.verified ? "text-sigea-green" : "text-orange-500"
                        }`}
                      >
                        {cert.verified ? "Verificado" : "Pendiente"}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="#"
                    className="w-full text-sigea-blue font-semibold hover:underline transition-colors flex items-center justify-between"
                  >
                    Verificar validez
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-body text-sigea-text-secondary">
                  No se encontraron certificados que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Verification Details - If Selected */}
      {selectedCertificate && (
        <section className="section-spacing bg-white">
          <div className="container-max px-4 md:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-sigea-blue-dark mb-6">
                Detalles de verificación
              </h2>

              <div className="bg-sigea-bg-light rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                    Número de certificado
                  </p>
                  <p className="font-mono font-semibold text-foreground">
                    SIGEA-2025-0001-SUS
                  </p>
                </div>

                <div>
                  <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                    Información del portador
                  </p>
                  <p className="font-semibold text-foreground">Juan Alberto Rodríguez Pérez</p>
                  <p className="text-sm text-sigea-text-secondary">
                    Cédula: 12345678
                  </p>
                </div>

                <div>
                  <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-2">
                    Duración
                  </p>
                  <p className="font-semibold text-foreground">40 horas académicas</p>
                </div>

                <div className="bg-white border-2 border-sigea-green rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-sigea-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sigea-green">Certificado verificado</p>
                    <p className="text-xs text-sigea-text-secondary">
                      Emitido el 20 de Marzo de 2025
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-sigea-text-secondary uppercase font-semibold mb-3">
                    Código QR
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-sigea-border-light w-32 h-32 mx-auto flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-xs text-sigea-text-secondary">QR Code</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="btn-primary justify-center">
                  Descargar certificado
                </button>
                <button className="btn-secondary justify-center">
                  Compartir
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
