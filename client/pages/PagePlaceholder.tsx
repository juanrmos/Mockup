import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description?: string;
}

export default function PagePlaceholder({
  title,
  description = "Esta página está en desarrollo. Continúa interactuando con la plataforma para ver más contenido.",
}: PagePlaceholderProps) {
  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center section-spacing">
        <div className="container-max text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-16 h-16 bg-sigea-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-sigea-blue-dark mb-4">
              {title}
            </h1>
            <p className="text-body text-sigea-text-secondary mb-8">
              {description}
            </p>
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
