import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    name: "Ana Clara",
    profession: "Estudante de Literatura",
    rating: 5,
    text: "Mais de 500 livros na palma da mão! Consigo ler no celular e no computador.",
    avatar: "AC"
  },
  {
    name: "João Santos",
    profession: "Professor",
    rating: 5,
    text: "Sem anúncios e com acesso vitalício. Melhor investimento que fiz!",
    avatar: "JS"
  },
  {
    name: "Maria Oliveira",
    profession: "Leitora apaixonada",
    rating: 5,
    text: "Biblioteca gigantesca, funciona offline. Não consigo mais viver sem!",
    avatar: "MO"
  }
];

export const TestimonialsSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-3 bg-gold/10 text-gold border-gold/30">
            LEITORES SATISFEITOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent">
            Quem já lê conosco
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            gridInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:border-gold/30 transition-all duration-300 hover-scale ${
                gridInView ? 'animate-fade-in' : ''
              }`}
              style={{
                animationDelay: gridInView ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/90 mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-premium rounded-full flex items-center justify-center text-background font-semibold text-xs">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.profession}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 mt-12 text-center transition-all duration-700 delay-500 ${
            statsInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div>
            <div className="text-2xl font-bold text-gold">50k+</div>
            <div className="text-xs text-muted-foreground">Leitores</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold">4.9★</div>
            <div className="text-xs text-muted-foreground">Avaliação</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold">500+</div>
            <div className="text-xs text-muted-foreground">Livros</div>
          </div>
        </div>
      </div>
    </section>
  );
};