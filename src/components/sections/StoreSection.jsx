import { Clock, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function StoreSection() {
  return (
    <section id="contact" className="bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal className="mb-10 md:mb-14">
          <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">the store Beauty</div>
          <h2 className="font-heading text-5xl md:text-6xl">Get in Touch</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6">
            <div>
              <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">Location</div>
              <p className="font-heading text-2xl">{SITE.addressLine1}</p>
              <p className="font-heading text-2xl">{SITE.addressLine2}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2"><Clock className="w-3.5 h-3.5" /> Hours</div>
                <p className="text-sm">{SITE.hours}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2"><Phone className="w-3.5 h-3.5" /> Phone</div>
                <p className="text-sm">{SITE.phoneDisplay}</p>
              </div>
            </div>
            <a href={whatsappLink("Hi the store! I'd like to enquire about a beauty product.")} className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[11px] tracking-wide-luxe uppercase hover:bg-foreground hover:text-background transition-colors">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
          <div className="bg-background p-8 md:p-10 border border-border">
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Need help?</div>
            <h3 className="font-heading text-4xl">Ask the store about a product.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">Ask about shades, sizes, current stock, pricing or which beauty category you're looking for.</p>
            <a href="#contact" className="mt-7 inline-flex items-center bg-foreground text-background px-7 py-3.5 text-[11px] tracking-wide-luxe uppercase">Send an Enquiry</a>
          </div>
        </div>
      </div>
    </section>
  );
}
