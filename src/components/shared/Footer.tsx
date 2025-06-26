import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 mt-auto border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Diego Bonilla. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:drbv27@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-ricardo-bonilla-villa-7179254a/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/drbv27"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
