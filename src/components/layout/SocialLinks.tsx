/**
 * @file SocialLinks.tsx
 * @description Header / footer GitHub and X icons. Opens an in-app 1.0 GA notice until official channels ship.
 */
import { IconGitHub, IconX } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/config/site";
import { useToast } from "@/context/ToastContext";
import { cn } from "@/lib/cn";

const ICONS = {
  github: IconGitHub,
  x: IconX,
} as const;

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  const { showComingSoon } = useToast();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = ICONS[item.id];
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => showComingSoon(item.id)}
            aria-label={`${item.label} (coming soon)`}
            className="inline-flex size-8 items-center justify-center rounded-md text-[#807d72] hover:text-[#26251e] hover:bg-[#efeee8] transition-colors"
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}
