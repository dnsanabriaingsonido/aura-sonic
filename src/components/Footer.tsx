import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-wider text-gradient-gold">
              AUDIUM GROUP
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              Firma técnica integral especializada en ingeniería de audio, producción y comunicación estratégica.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Divisiones</h4>
            <div className="space-y-2">
              <Link to="/ingenieria" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Ingeniería & Producción</Link>
              <Link to="/media" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Media & Creativa</Link>
              <Link to="/publicidad" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Publicidad & Comunicación</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Empresa</h4>
            <div className="space-y-2">
              <Link to="/nosotros" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Nosotros</Link>
              <Link to="/servicios" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Servicios</Link>
              <Link to="/contacto" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Contacto</h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>contacto@audiumgroup.com</p>
              <p>+00 000 000 0000</p>
              <p>Ciudad, País</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Audium Group. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
