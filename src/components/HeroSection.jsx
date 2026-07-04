import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto text-center z-10">
        <div className="space-y-6">

          <h2 className="text-xl md:text-2xl text-primary font-medium opacity-0 animate-fade-in">
  Hi, I'm
</h2>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight opacity-0 animate-fade-in-delay-1">
  <span className="text-primary">Anurag</span>
  <br />
  Agrawal
</h1>

<h3 className="text-xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-2">
  Java Spring Boot Developer | Python Developer | Generative AI Developer
</h3>

<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
  I am a passionate Java Spring Boot Developer with experience building secure,
  scalable, and RESTful backend applications. Along with backend development,
  I build modern full-stack web applications using React and continuously expand
  my expertise in Python, FastAPI, and Generative AI to develop intelligent,
  real-world software solutions.
</p>

<div className="flex flex-wrap justify-center gap-4 pt-6 opacity-0 animate-fade-in-delay-4">
  <a href="#projects" className="cosmic-button">
    View My Projects
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    Hire Me
  </a>
</div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll Down
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};