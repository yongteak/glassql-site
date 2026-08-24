/**
 * @file IntegrationsGrid.tsx
 * @description Database engines and partner ecosystem logo strip in Cursor.com style.
 */
import { cn } from "@/lib/cn";

const ENGINES = [
  { name: "PostgreSQL", logo: "/logos/postgres-logo.svg" },
  { name: "DuckDB", logo: "/logos/snowflake-logo.svg" },
  { name: "MySQL / MariaDB", logo: "/logos/mariadb-logo.svg" },
  { name: "ClickHouse", logo: "/logos/clickhouse-logo.svg" },
  { name: "BigQuery", logo: "/logos/bigquery-logo.svg" },
  { name: "MongoDB", logo: "/logos/mongodb-logo.svg" },
  { name: "Redis", logo: "/logos/redis-logo.svg" },
  { name: "AWS Athena", logo: "/logos/aws-athena-logo.svg" },
];

export function IntegrationsGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-12 border-y border-[#e6e5e0] bg-[#fafaf7]", className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-[#807d72] mb-8">
          Seamlessly queryable across modern database engines and data lakes
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center justify-center">
          {ENGINES.map((engine) => (
            <div
              key={engine.name}
              className="group flex flex-col items-center justify-center rounded-lg border border-[#e6e5e0] bg-white p-3.5 transition-all hover:border-[#cfcdc4] hover:bg-[#fafaf7]"
            >
              <img
                src={engine.logo}
                alt={engine.name}
                className="h-5 w-auto object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="mt-2 font-mono text-[10.5px] font-medium text-[#5a5852] group-hover:text-[#26251e] transition-colors">
                {engine.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
