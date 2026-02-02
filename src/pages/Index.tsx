import { 
  Mail, 
  Calendar, 
  Video, 
  BookOpen, 
  Handshake,
  Linkedin,
  X,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";
import SocialLink from "@/components/SocialLink";
import profilePhoto from "@/assets/profile-photo.png";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      {/* Main Card */}
      <div className="w-full max-w-[480px] animate-fade-in rounded-2xl bg-card p-8 card-glow">
        
        {/* Hero Section */}
        <div className="mb-8 flex items-start gap-5">
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-card">
              <img
                src={profilePhoto}
                alt="Benjamin Shotola"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Name & Tagline */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Benjamin Shotola</h1>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Email Marketer | Automation & Campaign Strategy
            </p>
          </div>
        </div>

        {/* Lead Magnet Section */}
        <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <div className="mb-4 flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground">
              Here's how I <span className="font-semibold text-primary">help brands grow</span> with email marketing. I design email systems that increase engagement, conversions, and long-term customer value.
            </p>
          </div>
          <Button 
            className="w-full animate-pulse-glow text-base font-semibold"
            size="lg"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              View My Services
            </a>
          </Button>
        </div>

        {/* CTA Links Stack */}
        <div className="mb-8 flex flex-col gap-3">
          <LinkButton href="#" icon={Mail} comingSoon>
            Join My Newsletter
          </LinkButton>
          <LinkButton href="https://nestuge.me/technicalben" icon={Calendar}>
            Book a Consultation
          </LinkButton>
          <LinkButton href="#" icon={Video} comingSoon>
            Watch My Webinars
          </LinkButton>
          <LinkButton href="#" icon={BookOpen} comingSoon>
            Download My Ebook
          </LinkButton>
          <LinkButton href="mailto:shotalabenjamin@gmail.com?subject=Brand Partnership Inquiry" icon={Handshake}>
            Brand Partnerships
          </LinkButton>
        </div>

        {/* Footer / Social Proof */}
        <div className="border-t border-border pt-6">
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Follow me on
          </p>
          <div className="flex items-center justify-center gap-6">
            <SocialLink 
              href="https://www.linkedin.com/in/benjamin-shotala/" 
              icon={Linkedin} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="https://x.com/TechnicalBben" 
              icon={X} 
              label="" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
