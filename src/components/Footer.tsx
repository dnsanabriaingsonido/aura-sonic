const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold tracking-wider text-gradient-gold">AUDIUM GROUP</p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Audium Group. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
