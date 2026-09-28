import { Image } from "@/components/ui/image";
import { Instagram } from "lucide-react";
import { IMAGES, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

const FEED = [IMAGES.social1, IMAGES.social2, IMAGES.social3, IMAGES.social4, IMAGES.social5, IMAGES.hero];

export default function SocialGallery() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <Reveal className="text-center mb-10 md:mb-14">
        <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The the store Beauty Edit</div>
        <h2 className="font-heading text-5xl md:text-6xl">the store Beauty & Cosmetics</h2>
      </Reveal>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {FEED.map((src, i) => (
          <a key={i} href={SITE.instagram === "#" ? "#" : SITE.instagram} target={SITE.instagram === "#" ? undefined : "_blank"} rel="noreferrer" className="group relative aspect-square overflow-hidden bg-stone">
            <Image src={src} alt="Self-care and baby and cosmetics" fittingType="fill" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#contact" className="inline-flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase border-b border-foreground pb-1 hover:text-accent transition-colors">Follow the store <Instagram className="w-3.5 h-3.5" /></a>
      </div>
    </section>
  );
}
