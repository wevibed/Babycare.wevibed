import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const NOTES = [
  "Ask the store about current products, shades and availability.",
  "Browse the catalogue first, then enquire directly before purchasing.",
  "Product prices and stock can change, so confirm the latest details with the store.",
];

export default function Testimonials() {
  return (
    <PageShell>
      <PageHeader label="Beauty Support" title="Customer Notes" subtitle="A simple place for future verified customer reviews." />
      <section className="max-w-[1000px] mx-auto px-5 md:px-10 pb-20 md:pb-28 grid md:grid-cols-3 gap-6">
        {NOTES.map((note, i) => <Reveal key={i} className="border border-border p-7"><p className="font-heading text-2xl leading-snug">“{note}”</p><p className="mt-6 text-[10px] tracking-wide-luxe uppercase text-muted-foreground">the store Beauty</p></Reveal>)}
      </section>
    </PageShell>
  );
}
