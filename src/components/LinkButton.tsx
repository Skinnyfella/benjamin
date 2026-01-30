import { LucideIcon } from "lucide-react";
import { toast } from "sonner";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  comingSoon?: boolean;
}

const LinkButton = ({ href, icon: Icon, children, comingSoon }: LinkButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (comingSoon) {
      e.preventDefault();
      toast("Coming Soon", {
        description: "This feature will be available soon. Stay tuned!",
      });
    }
  };

  return (
    <a
      href={comingSoon ? undefined : href}
      target={comingSoon ? undefined : "_blank"}
      rel={comingSoon ? undefined : "noopener noreferrer"}
      className={`group flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-6 py-4 text-base font-medium text-foreground ${
        comingSoon 
          ? "cursor-not-allowed opacity-60" 
          : "link-btn-hover hover:border-secondary/50 hover:bg-muted"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 transition-transform duration-300 ${comingSoon ? "text-muted-foreground" : "text-secondary group-hover:scale-110"}`} />
        <span>{children}</span>
      </div>
      {comingSoon && (
        <span className="rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs font-medium text-secondary">
          Coming Soon
        </span>
      )}
    </a>
  );
};

export default LinkButton;
