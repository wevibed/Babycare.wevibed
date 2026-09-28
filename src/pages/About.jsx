import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <PageShell>
      <PageHeader label="Our Beauty Edit" title="About the store" subtitle="Cosmetics and beauty essentials for everyday routines." />
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20 md:pb-28 space-y-20 md:space-y-28">
        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="aspect-[4/5] bg-stone overflow-hidden"><Image src={IMAGES.edit} alt="Self-care and baby collection" fittingType="fill" className="w-full h-full object-cover" /></div>
          <div>
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Philosophy</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">Beauty that fits your everyday.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Discover a considered range of cosmetics, skincare, fragrances, haircare and body care. Browse the catalogue, then contact the store to confirm current stock, shades and prices.</p>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="md:order-2 aspect-[4/5] bg-stone overflow-hidden"><Image src={IMAGES.skincare} alt="the store skincare collection" fittingType="fill" className="w-full h-full object-cover" /></div>
          <div className="md:order-1">
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Collection</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">Skincare, makeup, fragrance & more.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Use the catalogue as a simple digital shop window. Product availability and pricing can be confirmed directly with the store before purchase.</p>
          </div>
        </Reveal>
        <Reveal className="border-t border-border pt-12 text-center">
          <p className="font-heading text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">“Beauty made for you.”</p>
          <p className="mt-4 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">— the store Beauty & Cosmetics</p>
        </Reveal>
      </section>
    </PageShell>
  );
}
