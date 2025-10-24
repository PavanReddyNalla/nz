import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail } from "lucide-react";

/**
 * Footer with a left "Stay Connected" contact column and a right InquiryForm card.
 * Layout matches the screenshot: icons stacked above each contact line, centered on mobile,
 * left-aligned on desktop, and the form sits to the right (or below on small screens).
 */

const WhatsAppIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20.52 3.48A11.933 11.933 0 0012 0C5.373 0 0 5.373 0 12c0 2.117.555 4.167 1.606 5.973L0 24l6.234-1.593A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.197-1.246-6.199-3.48-8.52z" fill="#25D366"/>
    <path d="M17.3 14.07c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.91 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.46-.87-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19 0-.36-.05-.5-.06-.15-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.43 1.02 2.82 1.16 3.02.14.19 2.02 3.08 4.9 4.32 2.64 1.13 3.02 1 3.56.94.54-.06 1.72-.7 1.97-1.37.25-.66.25-1.22.17-1.33-.08-.12-.29-.19-.59-.34z" fill="#fff"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Stay Connected column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Stay Connected</h2>

            <div className="flex flex-col items-center md:items-start gap-8">
              {/* Phone */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="rounded-full bg-white/5 p-3 mb-1">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <p className="text-lg font-medium">+91 9990444740</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="rounded-full bg-white/5 p-3 mb-1">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <p className="text-lg font-medium">info@lightsindark.in</p>
              </div>

              {/* WhatsApp #1 */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="rounded-full bg-white/5 p-3 mb-1">
                  <WhatsAppIcon className="h-8 w-8" />
                </div>
                <p className="text-lg font-medium">+91 9990444740</p>
              </div>

              {/* WhatsApp #2 */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="rounded-full bg-white/5 p-3 mb-1">
                  <WhatsAppIcon className="h-8 w-8" />
                </div>
                <p className="text-lg font-medium">+91 9990444774</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-secondary-foreground/80">Office: 123 Travel Street, Mumbai, India</p>
          </div>

          {/* RIGHT: Inquiry Form card */}
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
            <InquiryForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-secondary-foreground/70 mt-12">
          <p>© 2024 New Zealand Specialist by Niche Travel. All rights reserved.</p>
          <p className="mt-2">Your Dream New Zealand Trip Starts Here.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;