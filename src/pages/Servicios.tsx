import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import {
  Volume2,
  Mic2,
  Ruler,
  Radio,
  Film,
  Podcast,
  Video,
  Music2,
  Headphones,
  MonitorSpeaker,
  Gauge,
  Building,
  Settings,
  Users,
  Wrench,
  Shield,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  MonitorPlay,
  AudioLines,
  ArrowRight,
} from "lucide-react";

const divisions = [
  {
    division: "Ingeniería & Producción Técnica",
    link: "/ingenieria",
    color: "División 01",
    services: [
      { icon: Volume2, title: "Sonido en Vivo", desc: "PA Systems, monitoreo IEM, consolas digitales y RF management para eventos de cualquier escala." },
      { icon: Users, title: "Crew Técnico", desc: "Stage managers, roadies, riggers y coordinación logística completa de producción." },
      { icon: Wrench, title: "Alquiler de Equipos", desc: "Audio, iluminación, video y backline profesional con soporte técnico incluido." },
      { icon: Settings, title: "Instalación de Sistemas", desc: "Diseño e instalación permanente para auditorios, iglesias, restaurantes y oficinas." },
      { icon: Ruler, title: "Acústica Arquitectónica", desc: "Modelado 3D, tratamiento acústico, difusión y diseño de estudios profesionales." },
      { icon: Shield, title: "Aislamiento Acústico", desc: "STC/IIC, flotación de pisos, tabiques, puertas y ventanas acústicas." },
      { icon: Gauge, title: "Medición y Calibración", desc: "SPL, RT60, STI, frecuencia de resonancia y mapeo de cobertura profesional." },
      { icon: Building, title: "Consultoría Normativa", desc: "Estudios de impacto acústico, mapas de ruido y planes de mitigación." },
    ],
  },
  {
    division: "Media & Producción Creativa",
    link: "/media",
    color: "División 02",
    services: [
      { icon: Mic2, title: "Producción Musical", desc: "Composición, arreglos, grabación multipista y dirección artística profesional." },
      { icon: Headphones, title: "Mezcla y Masterización", desc: "Mezcla estéreo/surround, stem mastering y normalización para todas las plataformas." },
      { icon: AudioLines, title: "Diseño Sonoro", desc: "Foley, síntesis, field recording y audio inmersivo para medios audiovisuales." },
      { icon: Film, title: "Postproducción", desc: "Edición de diálogos, mezcla 5.1/7.1, ADR y entrega en formatos broadcast." },
      { icon: Podcast, title: "Podcasts", desc: "Producción completa: grabación, edición, identidad sonora y distribución." },
      { icon: Radio, title: "Streaming Profesional", desc: "Multi-cámara, audio profesional, overlays y CDN dedicada para eventos en vivo." },
    ],
  },
  {
    division: "Publicidad & Comunicación",
    link: "/publicidad",
    color: "División 03",
    services: [
      { icon: Video, title: "Producción Audiovisual", desc: "Comerciales, spots digitales, contenido para redes y motion graphics." },
      { icon: Music2, title: "Jingles Comerciales", desc: "Composición original, adaptaciones multi-formato y licenciamiento completo." },
      { icon: Palette, title: "Branding Sonoro", desc: "Logo sonoro, soundscape de marca, UX sounds y audio guidelines." },
      { icon: Sparkles, title: "Identidad Sonora", desc: "Auditoría, estrategia, manual de identidad e implementación sonora integral." },
      { icon: Target, title: "Activaciones de Marca", desc: "Experiencias inmersivas, audio espacial e instalaciones interactivas." },
      { icon: MonitorPlay, title: "Contenido Empresarial", desc: "Videos institucionales, e-learning, reportes audiovisuales y comunicación interna." },
    ],
  },
];

const faqItems = [
  { question: "¿Cómo determino qué división necesito?", answer: "Cada división aborda un área específica: Ingeniería cubre eventos en vivo y acústica, Media se enfoca en producción y contenido sonoro, y Publicidad gestiona la comunicación de marca. Si tu proyecto cruza divisiones, nuestro equipo te asignará un director de proyecto que coordine los recursos necesarios de cada área." },
  { question: "¿Pueden manejar proyectos que involucren las tres divisiones?", answer: "Absolutamente. Esa es precisamente nuestra ventaja competitiva. Al ser una firma integral, coordinamos internamente todos los recursos necesarios con un solo punto de contacto para el cliente." },
  { question: "¿Cuál es el proceso para solicitar una cotización?", answer: "Puedes contactarnos a través del formulario web, email o teléfono. Agendamos una reunión de diagnóstico sin costo donde evaluamos tus necesidades y en 48-72 horas entregamos una propuesta técnica y comercial detallada." },
  { question: "¿Trabajan con empresas fuera de la ciudad?", answer: "Sí. Nuestro modelo de equipos por proyecto nos permite operar en múltiples ciudades. Coordinamos logística, personal local y equipos para ejecutar proyectos en cualquier ubicación." },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        image={heroImg}
        subtitle="Catálogo Completo"
        title="Todos nuestros"
        titleAccent="servicios"
        description="Más de 20 servicios especializados organizados en tres divisiones para ofrecer soluciones integrales a empresas, eventos y marcas."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
        ]}
      />

      {/* All Services by Division */}
      {divisions.map((div, di) => (
        <section key={di} className={`py-24 ${di % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
          <div className="container mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">{div.color}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{div.division}</h2>
              </div>
              <Link
                to={div.link}
                className="hidden md:flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline"
              >
                Ver detalle completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {div.services.map((s, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to={div.link}
              className="md:hidden flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline mt-6"
            >
              Ver detalle completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      ))}

      <FAQSection items={faqItems} title="Preguntas generales" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Servicios;
