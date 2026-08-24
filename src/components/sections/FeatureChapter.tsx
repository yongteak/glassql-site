/**
 * @file FeatureChapter.tsx
 * @description Long-scroll feature section with alternating copy and interactive product mockups in Cursor style.
 */
import type { FeatureChapterContent } from "@/content/features";
import { cn } from "@/lib/cn";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ProductMock } from "@/components/ui/ProductMock";

type FeatureChapterProps = {
  chapter: FeatureChapterContent;
  index?: number;
};

export function FeatureChapter({ chapter }: FeatureChapterProps) {
  const { id, kicker, title, body, pills, mock, frame, reverse } = chapter;

  return (
    <section id={id} className="py-20 md:py-24 border-t border-[#e6e5e0] overflow-hidden bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* Copy Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl font-normal tracking-[-0.03em] text-[#26251e] sm:text-4xl sm:leading-[1.18]">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5a5852] font-normal">
              {body}
            </p>

            {pills && pills.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-[#e6e5e0] bg-white px-3 py-1 font-mono text-[11px] text-[#5a5852]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Media / Mock Column */}
          <div className="lg:col-span-7">
            <DeviceFrame kind={frame} title={`GlasSQL — ${kicker}`}>
              <ProductMock variant={mock} />
            </DeviceFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
