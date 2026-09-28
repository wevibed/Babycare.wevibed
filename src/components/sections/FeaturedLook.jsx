import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function FeaturedLook() {
  return (
    <section id="about" className="bg-foreground text-background">
      <div className="grid md:grid-cols-2 min-h-[75vh]">
        <div className="relative order-2 md:order-1">
          <Image src={IMAGES.edit} alt="Self-care and baby collection" fittingType="fill" className="w-full h-full object-cover min-h-[55vh] md:min-h-full" />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <Reveal>
            <div className="text-[11px] tracking-luxe uppercase text-background/50 mb-4">The the store Edit · Beauty Essentials</div>
            <h2 className="font-heading text-5xl md:text-6xl leading-[0.95]">Your everyday<br />beauty ritual.</h2>
            <p className="mt-5 text-background/70 max-w-md">Explore cosmetics, skincare, fragrances, haircare and body care selected for everyday beauty routines.</p>
            <a href="#collections" className="mt-9 inline-flex items-center gap-2 border border-background px-7 py-3.5 text-[11px] tracking-wide-luxe uppercase hover:bg-background hover:text-foreground transition-colors w-fit">Explore Beauty <ArrowRight className="w-3.5 h-3.5" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
