import { COMPANY } from "@/lib/constants";

export function TrustBar() {
  return (
    <section
      className="border-y border-brand-navy/10 bg-white py-4"
      aria-label="Featured on trusted platforms"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-navy/50">
          Trusted across the GTA
        </p>
        <p className="text-sm font-medium text-brand-navy/80">
          Featured on{" "}
          <span className="text-brand-navy">
            {COMPANY.trustPlatforms.join(" · ")}
          </span>
        </p>
      </div>
    </section>
  );
}
