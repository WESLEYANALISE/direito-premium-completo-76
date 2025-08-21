import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Crown, Book } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const comparisonData = [
  { feature: "Biblioteca de livros", free: "50 livros", premium: "500+ livros" },
  { feature: "Leitura no computador", free: false, premium: true },
  { feature: "Download offline", free: false, premium: true },
  { feature: "Sem anúncios", free: false, premium: true },
  { feature: "Marcadores", free: "Limitado", premium: "Ilimitado" },
  { feature: "Busca avançada", free: "Básica", premium: "IA completa" },
  { feature: "Formatos suportados", free: "PDF", premium: "PDF + EPUB" },
  { feature: "Sincronização", free: false, premium: true },
  { feature: "Suporte", free: "Email", premium: "24/7" }
];

export const ComparisonTable = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [premiumRef, premiumInView] = useInView({ threshold: 0.2 });
  const [freeRef, freeInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-3 bg-gold/10 text-gold border-gold/30">
            COMPARAÇÃO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent">
            Grátis vs Premium
          </h2>
        </div>

        {/* Comparison Cards Mobile First */}
        <div className="grid gap-6">
          {/* Premium Card - Destacado */}
          <Card 
            ref={premiumRef}
            className={`bg-gradient-card border-gold/30 relative overflow-hidden order-1 transition-all duration-700 hover-scale ${
              premiumInView ? 'animate-scale-in' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute top-0 right-0 bg-gradient-premium text-background px-3 py-1 text-xs font-semibold rounded-bl-lg">
              RECOMENDADO
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-gold flex items-center justify-center gap-2">
                <Crown className="h-5 w-5" />
                Premium
              </CardTitle>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 17,99</span>
                <Badge className="bg-destructive text-destructive-foreground text-xs">50% OFF</Badge>
              </div>
              <div className="text-3xl font-bold text-gold">R$ 8,99</div>
              <p className="text-gold/80 text-sm">Acesso vitalício - Sem anúncios!</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1 text-sm">
                  <span className="text-foreground">{item.feature}</span>
                  <span className="text-gold font-medium">
                    {typeof item.premium === 'boolean' ? (
                      item.premium ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />
                    ) : item.premium}
                  </span>
                </div>
              ))}
              <Button 
                className="w-full mt-4 bg-gradient-premium hover:bg-gradient-premium/90 text-background font-semibold shadow-gold"
                onClick={() => {
                  console.log('Botão Premium clicado - redirecionando para:', 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0');
                  window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
                }}
              >
                <Book className="h-4 w-4 mr-2" />
                Garantir Acesso Vitalício
              </Button>
              <p className="text-center text-xs text-gold/70 mt-2">
                7 dias de garantia
              </p>
            </CardContent>
          </Card>

          {/* Free Card */}
          <Card 
            ref={freeRef}
            className={`bg-card border-border order-2 transition-all duration-700 delay-200 ${
              freeInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
            }`}
          >
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-muted-foreground">Gratuito</CardTitle>
              <div className="text-2xl font-bold text-foreground">R$ 0</div>
              <p className="text-muted-foreground text-sm">Recursos limitados</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1 text-sm">
                  <span className="text-foreground">{item.feature}</span>
                  <span className="text-muted-foreground">
                    {typeof item.free === 'boolean' ? (
                      item.free ? <Check className="h-4 w-4 text-feature-green" /> : <X className="h-4 w-4" />
                    ) : item.free}
                  </span>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline" disabled>
                Versão Atual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};