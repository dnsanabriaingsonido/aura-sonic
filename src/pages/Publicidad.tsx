import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/hero-publicidad.jpg";
import { Megaphone, Music2, Video, Palette, Sparkles, Target, MonitorPlay, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Producción Audiovisual Publicitaria",
    description:
      "Producción completa de contenido audiovisual para campañas publicitarias, comerciales de TV, spots digitales y contenido para redes sociales. Desde el concepto creativo hasta la entrega final optimizada para cada plataforma.",
    features: ["Comerciales TV/Digital", "Videos corporativos", "Contenido redes sociales", "Motion graphics"],
  },
  {
    icon: Music2,
    title: "Jingles Comerciales",
    description:
      "Composición y producción de jingles memorables que refuerzan el posicionamiento de marca. Adaptaciones para radio, televisión, digital y puntos de venta con licenciamiento completo.",
    features: ["Composición original", "Adaptaciones multi-formato", "Licenciamiento completo", "Versiones cortas/largas"],
  },
  {
    icon: Palette,
    title: "Branding Sonoro",
    description:
      "Diseño de identidad sonora integral para tu marca: logo sonoro, paisaje de marca, UX sounds, hold music y todas las expresiones sonoras que definen la personalidad auditiva de tu empresa.",
    features: ["Logo sonoro", "Soundscape de marca", "UX sounds", "Audio guidelines"],
  },
  {
    icon: Sparkles,
    title: "Identidad Sonora de Marca",
    description:
      "Estrategia completa de identidad sonora alineada con los valores, personalidad y posicionamiento de tu marca. Definimos el ADN sonoro que te diferencia en cada punto de contacto con tu audiencia.",
    features: ["Auditoría sonora", "Estrategia de marca", "Manual de identidad", "Implementación"],
  },
  {
    icon: Target,
    title: "Activaciones de Marca",
    description:
      "Diseño y ejecución de experiencias sonoras para activaciones BTL, eventos de marca, lanzamientos de producto y experiencias inmersivas. Tecnología de audio espacial y realidad aumentada sonora.",
    features: ["Experiencias inmersivas", "Audio espacial", "Instalaciones interactivas", "Eventos de marca"],
  },
  {
    icon: MonitorPlay,
    title: "Contenido Empresarial",
    description:
      "Producción de contenido audiovisual corporativo: videos institucionales, capacitaciones, reportes anuales en video, podcasts corporativos y comunicación interna multimedia.",
    features: ["Videos institucionales", "E-learning", "Reportes audiovisuales", "Comunicación interna"],
  },
];

const processSteps = [
  { number: "01", title: "Brief & Estrategia", description: "Entendemos tu marca, audiencia y objetivos comerciales. Definimos la estrategia sonora y creativa." },
  { number: "02", title: "Concepto Creativo", description: "Desarrollamos propuestas creativas, moodboards sonoros y prototipos para tu aprobación." },
  { number: "03", title: "Producción", description: "Ejecutamos la producción con los más altos estándares de calidad en nuestros estudios profesionales." },
  { number: "04", title: "Entrega & Activación", description: "Entregamos todos los assets optimizados para cada canal y acompañamos la implementación." },
];

const faqItems = [
  { question: "¿Qué incluye un proyecto de branding sonoro?", answer: "Un proyecto de branding sonoro incluye auditoría de la identidad actual, definición de la personalidad sonora, creación del logo sonoro, paisaje de marca, UX sounds, hold music, y un manual de identidad sonora con guidelines de implementación." },
  { question: "¿Cuánto tiempo toma producir un jingle?", answer: "Un jingle estándar toma entre 2-4 semanas desde el brief hasta la entrega final, incluyendo fases de concepto, composición, producción, mezcla y masterización con hasta 3 rondas de revisión." },
  { question: "¿Pueden producir contenido para redes sociales?", answer: "Sí. Producimos contenido optimizado para Instagram, TikTok, YouTube, LinkedIn y todas las plataformas, con formatos adaptados (vertical, cuadrado, horizontal) y duración específica para cada red." },
  { question: "¿Ofrecen licenciamiento de música?", answer: "Sí. Toda la música original que producimos incluye licenciamiento completo para los usos acordados. También ofrecemos opciones de licencia extendida para uso internacional y multi-plataforma." },
];

const Publicidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        image={heroImg}
        subtitle="División 03"
        title="Publicidad &"
        titleAccent="Comunicación Estratégica"
        description="Producción audiovisual publicitaria, branding sonoro, jingles y estrategia de comunicación para marcas que quieren ser escuchadas."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Divisiones", href: "/#divisions" },
          { label: "Publicidad", href: "/publicidad" },
        ]}
      />

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Servicios</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Comunicación <span className="text-gradient-gold">que impacta</span>
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-all duration-300 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-body text-xs text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection steps={processSteps} title="De la estrategia al impacto" subtitle="Metodología Creativa" />

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "80+", label: "Marcas atendidas" },
              { value: "150+", label: "Piezas producidas" },
              { value: "30+", label: "Jingles activos" },
              { value: "10+", label: "Identidades sonoras" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Preguntas sobre Publicidad" />
      <CTASection title="¿Tu marca necesita" accent="ser escuchada?" description="Creamos estrategias de comunicación sonora y audiovisual que posicionan tu marca en la mente de tu audiencia." />
      <Footer />
    </div>
  );
};

export default Publicidad;
