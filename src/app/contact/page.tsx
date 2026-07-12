import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Contact Us</h1>
      <p className="mt-1 text-forest/60">We would love to hear from you</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <ContactItem
            icon={<MapPin className="h-5 w-5" />}
            label="Address"
            value="42 Market Street, Koramangala, Bengaluru 560034"
          />
          <ContactItem
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value="+91 80 1234 5678"
            href="tel:+918012345678"
          />
          <ContactItem
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value="hello@freshlane.in"
            href="mailto:hello@freshlane.in"
          />
          <ContactItem
            icon={<Clock className="h-5 w-5" />}
            label="Hours"
            value="Monday – Sunday, 7:00 AM – 10:00 PM"
          />
        </div>

        <form className="rounded-2xl border border-sage/50 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-forest">Send a Message</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-forest">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-forest">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-forest px-5 py-2.5 font-medium text-cream transition-colors hover:bg-forest-light"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/30 text-forest">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-forest/60">{label}</p>
        {href ? (
          <a href={href} className="text-forest hover:text-terracotta transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-forest">{value}</p>
        )}
      </div>
    </div>
  );
}
