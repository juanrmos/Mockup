import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sigea-bg-light flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center section-spacing">
        <div className="container-max text-center">
          <div className="max-w-lg mx-auto">
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-bold text-sigea-blue mb-4">
                404
              </h1>
              <p className="text-body text-sigea-text-secondary">
                Página no encontrada
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sigea-blue-dark mb-4">
              Oops, algo salió mal
            </h2>
            <p className="text-body text-sigea-text-secondary mb-8">
              La página que buscas no existe o ha sido movida. Por favor, intenta 
              nuevamente o vuelve al inicio.
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
