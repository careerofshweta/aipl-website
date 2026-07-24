"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionHeader, FadeUp } from "@/components/site/ui";

export function ContactPage() {
  return (
    <div className="light-page section-top">
      <section className="container-x mx-auto max-w-7xl pb-16 md:pb-20">
        <SectionHeader
          kicker="Contact"
          title={
            <>
              Let's find your <span className="italic text-gold">DreamCity home</span>
            </>
          }
          subtitle="Share a few details and our team will curate options that match your requirements."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          <FadeUp className="md:col-span-2 space-y-4">
            <div className="premium-card rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
              <MapPin className="text-gold" size={22} />
              <h3 className="mt-3 font-serif text-xl">Sales Gallery</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                AIPL DreamCity, Chandigarh Road, Ludhiana, Punjab
              </p>
            </div>
            <div className="premium-card rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
              <Phone className="text-gold" size={22} />
              <h3 className="mt-3 font-serif text-xl">Talk to Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">+91 98000 00000 · Mon–Sun · 10–7</p>
            </div>
            <div className="premium-card rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45">
              <Mail className="text-gold" size={22} />
              <h3 className="mt-3 font-serif text-xl">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">sales@aipldreamcity.in</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-3">
            <div className="premium-card rounded-2xl border border-border/60 bg-surface/60 p-7 md:p-8">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
