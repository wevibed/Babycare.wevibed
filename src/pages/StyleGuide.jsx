import { Image } from "@/components/ui/image";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/site";

export default function StyleGuide() {
  return (
    <PageShell>
      <PageHeader label="Beauty Guide" title="Explore the Edit" subtitle="A simple guide to the categories available through the store Beauty & Cosmetics." />
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20 md:pb-28 space-y-10">
        {[['Skincare', IMAGES.skincare, 'Daily care, hydration and routine essentials.'], ['Makeup', IMAGES.makeup, 'Lip, complexion, eye and finishing essentials.'], ['Fragrances', IMAGES.fragrances, 'Scent options for everyday wear and special occasions.'], ['Haircare', IMAGES.haircare, 'Hair and scalp care for everyday routines.'], ['Body Care', IMAGES.bodycare, 'Body and self-care essentials.']].map(([title, image, copy]) => (
          <Reveal key={title} className="grid md:grid-cols-2 gap-8 items-center border-b border-border pb-10">
            <div className="aspect-[4/3] overflow-hidden bg-stone"><Image src={image} alt={title} fittingType="fill" className="w-full h-full object-cover" /></div>
            <div><div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Beauty Category</div><h2 className="font-heading text-4xl">{title}</h2><p className="mt-4 text-muted-foreground leading-relaxed">{copy}</p></div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
