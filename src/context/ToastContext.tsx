/**
 * @file ToastContext.tsx
 * @description In-app coming-soon notices for GitHub, X, and 1.0 GA until official channels ship.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { IconClock, IconClose, IconGitHub, IconX } from "@/components/ui/Icons";

export type ToastOptions = {
  title?: string;
  message: string;
  icon?: ReactNode;
  duration?: number;
};

type ToastState = (ToastOptions & { id: number; visible: boolean }) | null;

type ToastContextValue = {
  showToast: (options: ToastOptions | string) => void;
  showComingSoon: (target: "github" | "x" | "general") => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideToast = useCallback(() => {
    setToast((prev) => (prev ? { ...prev, visible: false } : null));
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setTimeout(() => {
      setToast(null);
    }, 250);
  }, []);

  const showToast = useCallback(
    (options: ToastOptions | string) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      const opts: ToastOptions =
        typeof options === "string" ? { message: options } : options;

      const duration = opts.duration ?? 4000;
      const id = Date.now();

      setToast({
        id,
        visible: true,
        title: opts.title,
        message: opts.message,
        icon: opts.icon,
        duration,
      });

      timerRef.current = setTimeout(() => {
        hideToast();
      }, duration);
    },
    [hideToast],
  );

  const showComingSoon = useCallback(
    (target: "github" | "x" | "general" = "general") => {
      if (target === "github") {
        showToast({
          title: "Open source ships with 1.0 GA",
          message:
            "We're lining up the core engine and docs. The repository goes public at 1.0 general availability.",
          icon: <IconGitHub className="size-4 text-[#26251e]" />,
        });
      } else if (target === "x") {
        showToast({
          title: "Official X account coming soon",
          message:
            "We're setting up the channel for release notes and build logs. See you there shortly.",
          icon: <IconX className="size-4 text-[#26251e]" />,
        });
      } else {
        showToast({
          title: "Building toward 1.0 GA",
          message: "We're still shipping. The full launch is coming — stay tuned.",
          icon: <IconClock className="size-4 text-[#26251e]" />,
        });
      }
    },
    [showToast],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, showComingSoon, hideToast }}>
      {children}

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 top-5 z-[60] flex justify-center px-4 transition-all duration-200 ease-out"
        >
          <div
            className={`pointer-events-auto flex max-w-md items-start gap-3.5 rounded-2xl border border-[#e6e5e0] bg-white/95 p-4 shadow-[0_12px_40px_rgba(38,37,30,0.12)] backdrop-blur-xl transition-all duration-200 ${
              toast.visible
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-2 opacity-0 scale-95"
            }`}
          >
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl border border-[#e6e5e0] bg-[#fafaf7]">
              {toast.icon ?? <IconClock className="size-4 text-[#26251e]" />}
            </div>

            <div className="flex-1 pr-2">
              {toast.title && (
                <h4 className="text-[13px] font-medium text-[#26251e]">{toast.title}</h4>
              )}
              <p
                className={`text-[12px] leading-relaxed text-[#5a5852] ${
                  toast.title ? "mt-1" : ""
                }`}
              >
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={hideToast}
              className="-mr-1 -mt-1 flex size-6 shrink-0 items-center justify-center rounded-lg text-[#807d72] hover:bg-[#efeee8] hover:text-[#26251e] transition-colors"
              aria-label="Dismiss notification"
            >
              <IconClose />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
