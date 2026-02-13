import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/hero-nosotros.jpg";
import teamDilan from "@/assets/team-dilan.jpg";
import { Target, Users, Zap, Shield, Eye, Heart, Award, TrendingUp, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Precisión", description: "Cada proyecto se ejecuta con estándares de ingeniería profesional. No dejamos nada al azar." },
  { icon: Lightbulb, title: "Innovación", description: "Combinamos tecnología de vanguardia con creatividad para soluciones que rompen paradigmas." },
  { icon: Handshake, title: "Integridad", description: "Transparencia en cada proceso, compromiso en cada entrega. Tu confianza es nuestro activo principal." },
  { icon: Award, title: "Excelencia", description: "Buscamos la perfección en cada detalle, desde la planificación hasta la entrega final." },
  { icon: Users, title: "Colaboración", description: "Creemos en el poder del talento colectivo. Cada proyecto se enriquece con visiones diversas." },
  { icon: TrendingUp, title: "Escalabilidad", description: "Diseñamos soluciones que crecen con tu negocio. Tu éxito impulsa nuestro crecimiento." },
];

const timeline = [
  { year: "Fundación", title: "Nace la Visión", description: "Dilan funda AUDIUM GROUP con la misión de integrar ingeniería de sonido, producción creativa y comunicación estratégica en una sola firma." },
  { year: "Año 1", title: "Primeros Contratos Corporativos", description: "Primeros contratos con constructoras y empresas del sector corporativo. Se establece la red de profesionales senior." },
  { year: "Año 2-3", title: "Consolidación de Divisiones", description: "Las tres divisiones operan de forma autónoma con equipos especializados. Se amplía la cartera de clientes B2B." },
  { year: "Año 5", title: "Expansión Regional", description: "Presencia en múltiples ciudades, equipo de +30 profesionales y posicionamiento como firma líder del sector." },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        image={heroImg}
        subtitle="Nuestra Historia"
        title="Una firma construida"
        titleAccent="por ingenieros"
        description="AUDIUM GROUP nace de la convicción de que el sonido, la tecnología y la creatividad pueden transformar la manera en que las empresas se comunican."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros", href: "/nosotros" },
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-sm p-10">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Misión</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Proveer soluciones integrales de ingeniería de audio, producción técnica, creativa y comunicación estratégica que permitan a nuestros clientes alcanzar sus objetivos comerciales y creativos con los más altos estándares de calidad profesional.
              </p>
            </div>
            <div className="bg-card border border-border rounded-sm p-10">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Visión</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ser la firma técnica-creativa de referencia en la región, reconocida por la excelencia de nuestras soluciones, la innovación de nuestros procesos y el impacto medible que generamos en cada proyecto para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
            <div className="relative">
              <img
                src={teamDilan}
                alt="Dilan - Fundador y Director General"
                className="w-full aspect-square object-cover rounded-sm border border-border"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-gold rounded-sm px-6 py-3">
                <p className="font-body text-xs font-bold text-primary-foreground tracking-wider uppercase">Fundador & CEO</p>
              </div>
            </div>

            <div>
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Liderazgo</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dilan <span className="text-gradient-gold">— Director General</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Ingeniero de sonido con amplia experiencia en producción técnica, acústica arquitectónica y comunicación estratégica. Su visión de integrar la ingeniería con la creatividad y la estrategia de negocio dio origen a AUDIUM GROUP.
                </p>
                <p>
                  Bajo su dirección, la firma ha desarrollado un modelo de negocio híbrido que combina la experiencia de profesionales senior con la energía y talento de nuevas generaciones, creando equipos de alto rendimiento para cada proyecto.
                </p>
                <p>
                  Su enfoque se centra en construir relaciones comerciales de largo plazo con clientes corporativos, ofreciendo soluciones técnicas que superan las expectativas y generan valor medible.
                </p>
              </div>

              <div className="flex gap-8 mt-8">
                {[
                  { value: "Ing. Sonido", label: "Formación" },
                  { value: "3 Divisiones", label: "Dirección" },
                  { value: "B2B", label: "Enfoque" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-display text-lg font-bold text-gradient-gold">{item.value}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Modelo de Negocio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Estructura <span className="text-gradient-gold">híbrida y escalable</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Red de Profesionales Senior",
                description: "Ingenieros, técnicos y creativos con más de 10 años de experiencia en sus áreas. Lideran cada proyecto con conocimiento profundo y estándares de excelencia.",
                icon: Award,
              },
              {
                title: "Talento Joven Capacitado",
                description: "Profesionales recién egresados seleccionados por su talento y compromiso. Formados internamente bajo la mentoría directa de nuestros líderes senior.",
                icon: Zap,
              },
              {
                title: "Equipos por Proyecto",
                description: "Ensamblamos el equipo ideal para cada proyecto según sus requerimientos específicos. Flexibilidad operativa con bajo costo fijo y alta calidad de entrega.",
                icon: Users,
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">ADN Corporativo</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Nuestros <span className="text-gradient-gold">valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Trayectoria</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Plan de <span className="text-gradient-gold">crecimiento</span>
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12 pb-12 last:pb-0">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[17px] top-8 w-px h-full bg-border" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-1 w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                <div className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors">
                  <span className="font-body text-xs text-primary font-semibold tracking-wider uppercase">{item.year}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Nuestras <span className="text-gradient-gold">divisiones</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Ingeniería & Producción Técnica", href: "/ingenieria", desc: "Sonido en vivo, acústica, instalaciones y consultoría normativa." },
              { title: "Media & Producción Creativa", href: "/media", desc: "Producción musical, mezcla, masterización, podcasts y streaming." },
              { title: "Publicidad & Comunicación", href: "/publicidad", desc: "Branding sonoro, jingles, contenido audiovisual y activaciones." },
            ].map((div, i) => (
              <Link
                key={i}
                to={div.href}
                className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-all duration-300 block"
              >
                <span className="font-body text-xs text-primary tracking-wider uppercase font-medium">División 0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{div.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{div.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Nosotros;
