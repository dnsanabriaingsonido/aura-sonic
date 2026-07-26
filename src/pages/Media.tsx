import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DynamicServices from "@/components/DynamicServices";
import heroImg from "@/assets/hero-media.jpg";
import svcImg1 from "@/assets/service-media-1.jpg";
import svcImg2 from "@/assets/service-media-2.jpg";
import svcImg3 from "@/assets/service-media-3.jpg";
import { Music, Headphones, Film, Podcast, Radio, AudioLines } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Producción Musical",
    description:
      "Producción musical integral desde la composición hasta el master final. Trabajamos con artistas, bandas y proyectos corporativos para crear piezas musicales de calidad profesional con identidad sonora única.",
    features: ["Composición y arreglos", "Grabación multipista", "Producción ejecutiva", "Dirección artística"],
    image: svcImg1,
  },
  {
    icon: Headphones,
    title: "Mezcla y Masterización",
    description:
      "Mezcla profesional en entorno calibrado con monitoreo de referencia. Masterización para todas las plataformas de distribución digital, vinilo y broadcast con estándares LUFS internacionales.",
    features: ["Mezcla estéreo y surround", "Stem mastering", "Loudness normalization", "Distribución digital"],
    image: svcImg1,
  },
  {
    icon: AudioLines,
    title: "Diseño Sonoro",
    description:
      "Creación de paisajes sonoros, efectos y ambientes para producciones audiovisuales, videojuegos, instalaciones artísticas y experiencias inmersivas. Sound design con librerías propias y grabaciones de campo.",
    features: ["Foley artístico", "Síntesis de sonido", "Field recording", "Audio inmersivo"],
    image: svcImg2,
  },
  {
    icon: Film,
    title: "Postproducción Audiovisual",
    description:
      "Edición de audio para cine, documental, publicidad y contenido digital. Sincronización, doblaje, mezcla 5.1/7.1 y entrega en formatos broadcast profesional.",
    features: ["Edición de diálogos", "Mezcla 5.1 / 7.1", "ADR y doblaje", "Entrega broadcast"],
    image: svcImg1,
  },
  {
    icon: Podcast,
    title: "Producción de Podcast",
    description:
      "Producción completa de podcast: desde la planificación editorial hasta la edición, mezcla, masterización y distribución en todas las plataformas. Asesoría en identidad sonora y formato.",
    features: ["Grabación remota/estudio", "Edición narrativa", "Intro/outro personalizados", "Distribución multiplataforma"],
    image: svcImg3,
  },
  {
    icon: Radio,
    title: "Streaming Profesional",
    description:
      "Soluciones de streaming en vivo para eventos corporativos, conferencias, conciertos y formatos híbridos. Integración de audio profesional con plataformas de streaming.",
    features: ["Multi-cámara", "Audio profesional", "Overlays personalizados", "CDN dedicada"],
    image: svcImg2,
  },
];

const processSteps = [
  { number: "01", title: "Pre-producción", description: "Definimos objetivos creativos, referencias sonoras, cronograma y recursos necesarios para tu proyecto." },
  { number: "02", title: "Producción", description: "Grabación y creación en estudio profesional con ingenieros y productores de primer nivel." },
  { number: "03", title: "Post-producción", description: "Edición, mezcla y masterización con atención obsesiva al detalle y control de calidad exhaustivo." },
  { number: "04", title: "Entrega & Distribución", description: "Entrega en todos los formatos requeridos con soporte en distribución digital y estrategia de lanzamiento." },
];

const faqItems = [
  { question: "¿Qué géneros musicales manejan?", answer: "No nos limitamos a un género. Nuestros productores e ingenieros tienen experiencia en pop, rock, electrónica, hip-hop, música clásica, jingles corporativos y diseño sonoro experimental." },
  { question: "¿Puedo grabar remotamente?", answer: "Sí. Contamos con infraestructura para sesiones de grabación remota en tiempo real con monitoreo de baja latencia, permitiendo que artistas participen desde cualquier ubicación." },
  { question: "¿En qué formatos entregan los masters?", answer: "Entregamos en WAV, AIFF, MP3 y formatos especializados según la plataforma: Spotify (LUFS -14), Apple Music, YouTube, broadcast TV/radio y vinilo." },
  { question: "¿Ofrecen producción de podcast desde cero?", answer: "Sí. Desde la conceptualización del formato, identidad sonora, grabación, edición y distribución en Apple Podcasts, Spotify, Google Podcasts y más." },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        image={heroImg}
        subtitle="División 02"
        title="Media &"
        titleAccent="Producción Creativa"
        description="Producción musical, mezcla, masterización, diseño sonoro y contenido audiovisual con estándares de calidad internacional."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Divisiones", href: "/#divisions" },
          { label: "Media", href: "/media" },
        ]}
      />

      <DynamicServices title="Servicios" accent="creativos" services={services} />

      <ProcessSection steps={processSteps} title="Del concepto al master" subtitle="Flujo Creativo" />

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Tracks producidos" },
              { value: "100+", label: "Podcasts editados" },
              { value: "50+", label: "Clientes corporativos" },
              { value: "24/7", label: "Soporte de estudio" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Preguntas sobre Media" />
      <CTASection title="¿Tienes un proyecto" accent="creativo?" description="Desde una canción hasta un podcast corporativo, nuestro equipo creativo está listo para dar vida a tu visión sonora." />
      <Footer />
    </div>
  );
};

export default Media;
