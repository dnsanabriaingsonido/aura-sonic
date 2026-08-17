import { useState } from "react";
import {
  Speaker,
  Mic,
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
  ArrowUpRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";

import svcIng1 from "@/assets/service-ing-1.jpg";
import svcIng2 from "@/assets/service-ing-2.jpg";
import svcIng3 from "@/assets/service-ing-3.jpg";
import svcMedia1 from "@/assets/service-media-1.jpg";
import svcMedia2 from "@/assets/service-media-2.jpg";
import svcMedia3 from "@/assets/service-media-3.jpg";
import svcPub1 from "@/assets/service-pub-1.jpg";
import svcPub2 from "@/assets/service-pub-2.jpg";
import svcPub3 from "@/assets/service-pub-3.jpg";
import divEng from "@/assets/division-engineering.jpg";
import divMedia from "@/assets/division-media.jpg";
import divPub from "@/assets/division-advertising.jpg";

interface Service {
  icon: LucideIcon;
  label: string;
  division: string;
  image: string;
  description: string;
  specs: string[];
}

const services: Service[] = [
  {
    icon: Speaker,
    label: "Sonido en Vivo",
    division: "Ingeniería & Producción Técnica",
    image: svcIng1,
    description:
      "Diseño y operación de sistemas de refuerzo sonoro line-array con predicción de cobertura por software, alineación temporal y control de SPL por zonas. Operamos consolas digitales con redes de audio Dante/AES67, monitoreo IEM y gestión de espectro RF para garantizar inteligibilidad y estabilidad durante todo el evento.",
    specs: ["Line-array y subs cardioides", "Redes Dante / AES67", "Monitoreo IEM y wedges", "Coordinación de frecuencias RF"],
  },
  {
    icon: Mic,
    label: "Producción Musical",
    division: "Media & Producción Creativa",
    image: svcMedia1,
    description:
      "Producción integral en cadena analógica-digital: preproducción, arreglos, grabación multipista a 24 bit/96 kHz, edición rítmica y dirección artística. Trabajamos con conversión de alta resolución, previos de clase A y monitoreo calibrado para asegurar traducción sonora en cualquier sistema.",
    specs: ["Grabación 24bit/96kHz", "Cadena analógica clase A", "Edición y comping detallado", "Dirección artística"],
  },
  {
    icon: Ruler,
    label: "Acústica Arquitectónica",
    division: "Ingeniería & Producción Técnica",
    image: svcIng2,
    description:
      "Modelado acústico predictivo del recinto, cálculo de tiempos de reverberación (RT60) por banda de octava y diseño de tratamiento con absorción porosa, resonadores y difusión geométrica. Entregamos planos técnicos, especificación de materiales y validación post-obra mediante medición.",
    specs: ["Modelado 3D predictivo", "Control de RT60 por banda", "Difusión y absorción calculada", "Validación post-obra"],
  },
  {
    icon: Radio,
    label: "Streaming Profesional",
    division: "Media & Producción Creativa",
    image: svcMedia2,
    description:
      "Transmisiones multicámara con switcher de producción, embebido de audio broadcast, gráficos en tiempo real y redundancia de encoders y enlaces. Configuramos bitrate adaptativo, monitoreo de latencia y distribución simultánea a múltiples plataformas o CDN dedicada.",
    specs: ["Switching multicámara", "Encoders redundantes", "Loudness broadcast (-14 LUFS)", "Multi-destino / CDN"],
  },
  {
    icon: Film,
    label: "Producción Audiovisual",
    division: "Publicidad & Comunicación",
    image: svcPub1,
    description:
      "Ciclo completo de producción: guion técnico, dirección de fotografía, registro en formato log, etalonaje en espacio de color gestionado, motion graphics y mezcla final. Entregamos masters optimizados por canal con especificaciones de códec, framerate y relación de aspecto.",
    specs: ["Registro log / raw", "Color grading gestionado", "Motion graphics", "Masters por canal"],
  },
  {
    icon: Podcast,
    label: "Podcasts",
    division: "Media & Producción Creativa",
    image: svcMedia3,
    description:
      "Cabina tratada acústicamente, captación con micrófonos de patrón dirigido y aislamiento entre canales, procesamiento con control dinámico, de-esser y reducción de ruido espectral. Normalizamos a estándares de plataforma y estructuramos identidad sonora y publicación por RSS.",
    specs: ["Captación multicanal aislada", "Procesado dinámico y de-noise", "Normalización -16 LUFS", "Identidad sonora y RSS"],
  },
  {
    icon: Video,
    label: "Contenido Publicitario",
    division: "Publicidad & Comunicación",
    image: svcPub2,
    description:
      "Piezas construidas sobre objetivo de campaña: definición de mensaje, formatos verticales y horizontales, versiones por duración y adaptación de subtítulos. Producción ágil orientada a rendimiento con variantes para testing creativo y medición.",
    specs: ["Versionado multi-formato", "Cortes 6s / 15s / 30s", "Subtitulado y accesibilidad", "Variantes para A/B testing"],
  },
  {
    icon: Music2,
    label: "Branding Sonoro",
    division: "Publicidad & Comunicación",
    image: svcPub3,
    description:
      "Construcción del sistema sonoro de marca: logo sonoro, paleta tímbrica, arquitectura de UX sounds y reglas de uso documentadas. Definimos jerarquías, tempos y niveles para asegurar coherencia auditiva en todos los puntos de contacto.",
    specs: ["Logo sonoro y variantes", "Paleta tímbrica definida", "UX sounds y micro-interacción", "Manual de uso sonoro"],
  },
  {
    icon: Headphones,
    label: "Mezcla & Master",
    division: "Media & Producción Creativa",
    image: divMedia,
    description:
      "Mezcla en entorno calibrado con gestión de balance espectral, dinámica y campo estéreo, seguida de masterización con control de loudness, true peak y compatibilidad mono. Entregamos stems y masters específicos para streaming, broadcast y formato físico.",
    specs: ["Monitoreo calibrado", "True peak ≤ -1 dBTP", "Stem mastering", "Entregas por plataforma"],
  },
  {
    icon: MonitorSpeaker,
    label: "Instalación de Sistemas",
    division: "Ingeniería & Producción Técnica",
    image: svcIng3,
    description:
      "Ingeniería de instalaciones fijas para auditorios, corporativos, templos y hospitalidad: diseño de cobertura, cálculo de carga eléctrica y rigging certificado, cableado estructurado y programación de DSP con presets por escenario de uso.",
    specs: ["Diseño de cobertura", "Rigging certificado", "Programación DSP", "Documentación as-built"],
  },
  {
    icon: Gauge,
    label: "Medición y Calibración",
    division: "Ingeniería & Producción Técnica",
    image: divEng,
    description:
      "Caracterización objetiva del sistema y del recinto con analizador de respuesta de impulso: SPL ponderado, RT60, STI, coherencia y mapeo de cobertura. Aplicamos alineación de fase y retardos, ecualización correctiva y emitimos informe técnico con evidencia antes/después.",
    specs: ["SPL, RT60 y STI", "Alineación de fase y delay", "Mapeo de cobertura", "Informe técnico certificable"],
  },
  {
    icon: Building,
    label: "Consultoría Corporativa",
    division: "Ingeniería & Producción Técnica",
    image: divPub,
    description:
      "Asesoría técnica y normativa para proyectos audiovisuales: estudios de impacto acústico, mapas de ruido, planes de mitigación, dimensionamiento presupuestal y pliegos de especificación para licitación. Acompañamos la interventoría hasta la entrega final.",
    specs: ["Estudio de impacto acústico", "Mapas de ruido", "Pliegos y especificación", "Interventoría técnica"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Soluciones <span className="text-gradient-gold">de extremo a extremo</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.label} delay={(i % 4) * 0.08} y={28}>
              <button
                type="button"
                onClick={() => setActive(s)}
                aria-label={`Ver detalle de ${s.label}`}
                className="group relative w-full h-full text-left overflow-hidden rounded-sm border border-border bg-card hover:border-primary/50 hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
              >
                {/* image reveal on hover */}
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-30 group-hover:scale-100 transition-all duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/40 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary group-hover:rotate-6 transition-all duration-500">
                    <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <p className="font-body text-sm font-medium text-foreground">{s.label}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-body text-[10px] tracking-[0.2em] uppercase text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Ver detalle <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-border bg-card">
          {active && (
            <div className="max-h-[85vh] overflow-y-auto">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-full object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 animate-fade-up">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-sm flex items-center justify-center">
                      <active.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-[11px] tracking-[0.3em] uppercase text-primary">
                      {active.division}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                    {active.label}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-4 md:pt-6">
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {active.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {active.specs.map((spec, si) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 bg-background/60 border border-border/60 rounded-sm px-3 py-2.5 animate-fade-up hover:border-primary/40 hover:translate-x-1 transition-all duration-300"
                      style={{ animationDelay: `${0.1 + si * 0.08}s`, opacity: 0 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-body text-xs md:text-sm text-foreground/85">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
