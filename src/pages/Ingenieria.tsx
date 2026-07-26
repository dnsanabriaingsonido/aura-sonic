import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DynamicServices from "@/components/DynamicServices";
import heroImg from "@/assets/hero-ingenieria.jpg";
import svcImg1 from "@/assets/service-ing-1.jpg";
import svcImg2 from "@/assets/service-ing-2.jpg";
import svcImg3 from "@/assets/service-ing-3.jpg";
import {
  Volume2,
  Settings,
  Ruler,
  Shield,
  Gauge,
  Building,
  Wrench,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Volume2,
    title: "Sonido en Vivo",
    description:
      "Diseño, montaje y operación de sistemas de sonido profesional para eventos corporativos, conciertos, conferencias y festivales. Trabajamos con equipos de última generación y técnicos certificados para garantizar cobertura uniforme y claridad en cada punto del venue.",
    features: ["PA Systems Line Array", "Monitoreo personal IEM", "Consolas digitales", "RF Management"],
  },
  {
    icon: Users,
    title: "Crew Técnico & Stage Management",
    description:
      "Coordinación integral de equipos técnicos: stage managers, roadies, riggers y técnicos especializados. Planificación logística completa desde el load-in hasta el desmontaje.",
    features: ["Stage management", "Coordinación de crew", "Logística técnica", "Riders técnicos"],
  },
  {
    icon: Wrench,
    title: "Alquiler de Equipos Profesionales",
    description:
      "Flota de equipos profesionales disponible para cualquier escala de producción. Desde microfonía especializada hasta sistemas de PA de gran formato, con soporte técnico incluido.",
    features: ["Audio profesional", "Iluminación", "Video y pantallas", "Backline"],
  },
  {
    icon: Settings,
    title: "Diseño e Instalación de Sistemas",
    description:
      "Diseño a medida e instalación permanente de sistemas de audio para espacios comerciales, auditorios, iglesias, restaurantes y oficinas corporativas. Integración con sistemas de automatización.",
    features: ["Diseño electroacústico", "Instalación fija", "Automatización", "Comisionamiento"],
  },
  {
    icon: Ruler,
    title: "Acústica Arquitectónica",
    description:
      "Consultoría y diseño acústico para espacios nuevos o existentes. Tratamiento acústico, control de reverberación, diseño de salas de grabación, auditorios y espacios educativos.",
    features: ["Modelado acústico 3D", "Tratamiento absorbente", "Difusión acústica", "Diseño de estudios"],
  },
  {
    icon: Shield,
    title: "Aislamiento Acústico",
    description:
      "Soluciones de aislamiento acústico para construcciones, estudios, espacios industriales y residenciales. Cumplimiento de normativas locales e internacionales de control de ruido.",
    features: ["STC / IIC", "Flotación de pisos", "Tabiques acústicos", "Puertas y ventanas"],
  },
  {
    icon: Gauge,
    title: "Medición y Calibración",
    description:
      "Mediciones acústicas profesionales con equipos certificados: SPL, RT60, STI, frecuencia de resonancia. Calibración de sistemas de sonido para óptimo rendimiento.",
    features: ["SPL & LEQ", "Tiempo de reverberación", "Inteligibilidad STI", "Mapeo de cobertura"],
  },
  {
    icon: Building,
    title: "Consultoría Normativa de Ruido",
    description:
      "Asesoría técnica para cumplimiento de normativas ambientales de ruido. Estudios de impacto acústico, planes de mitigación y representación ante autoridades regulatorias.",
    features: ["Estudios de impacto", "Mapas de ruido", "Planes de mitigación", "Informes técnicos"],
  },
];

const processSteps = [
  { number: "01", title: "Diagnóstico", description: "Evaluamos tu espacio o evento, identificamos necesidades técnicas y definimos objetivos acústicos medibles." },
  { number: "02", title: "Diseño Técnico", description: "Desarrollamos planos, simulaciones y especificaciones detalladas con software profesional de modelado." },
  { number: "03", title: "Implementación", description: "Ejecutamos con crew certificado, equipos de primer nivel y supervisión directa de ingenieros senior." },
  { number: "04", title: "Verificación", description: "Medimos, calibramos y entregamos informes técnicos que certifican el cumplimiento de estándares." },
];

const faqItems = [
  { question: "¿Qué tipo de eventos cubren?", answer: "Cubrimos desde conferencias corporativas íntimas de 50 personas hasta festivales de más de 10,000 asistentes. Cada proyecto recibe un diseño de sistema personalizado según el venue y las necesidades específicas del evento." },
  { question: "¿Trabajan con normativas internacionales de acústica?", answer: "Sí. Nuestros ingenieros están capacitados en normativas ISO 3382, IEC 60268, ANSI S12.60, y regulaciones locales de control de ruido ambiental. Todos nuestros informes cumplen estándares internacionales." },
  { question: "¿Incluyen soporte técnico durante los eventos?", answer: "Absolutamente. Todo alquiler de equipos y producción de eventos incluye técnicos especializados en sitio durante todo el montaje, evento y desmontaje." },
  { question: "¿Qué software utilizan para diseño acústico?", answer: "Utilizamos EASE, CATT-Acoustic, Smaart, REW, y SysTune para modelado, medición y calibración profesional de sistemas y espacios acústicos." },
  { question: "¿Ofrecen servicios de consultoría sin ejecución?", answer: "Sí. Ofrecemos consultoría independiente donde entregamos planos, especificaciones y recomendaciones técnicas para que sean ejecutadas por el equipo de tu preferencia." },
];

const Ingenieria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        image={heroImg}
        subtitle="División 01"
        title="Ingeniería &"
        titleAccent="Producción Técnica"
        description="Soluciones integrales de ingeniería de audio, acústica y producción técnica para eventos, espacios arquitectónicos y sistemas de sonido profesional."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Divisiones", href: "/#divisions" },
          { label: "Ingeniería", href: "/ingenieria" },
        ]}
      />

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Servicios</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Capacidades <span className="text-gradient-gold">técnicas</span>
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

      <ProcessSection steps={processSteps} title="Cómo trabajamos" subtitle="Metodología Técnica" />

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Eventos producidos" },
              { value: "50+", label: "Espacios tratados" },
              { value: "15+", label: "Años de experiencia combinada" },
              { value: "100%", label: "Proyectos entregados a tiempo" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Preguntas sobre Ingeniería" />
      <CTASection title="¿Tienes un evento o proyecto" accent="técnico?" description="Nuestro equipo de ingenieros está listo para diseñar la solución perfecta para tu espacio o evento." />
      <Footer />
    </div>
  );
};

export default Ingenieria;
