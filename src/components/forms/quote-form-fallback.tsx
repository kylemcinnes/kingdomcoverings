export function QuoteFormFallback() {
  return (
    <div
      className="animate-pulse rounded-2xl border border-brand-navy/10 bg-white p-8 shadow-sm"
      aria-hidden
    >
      <div className="h-2 w-1/3 rounded bg-brand-navy/10" />
      <div className="mt-6 h-10 w-full rounded-lg bg-muted" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-muted" />
      </div>
      <div className="mt-6 h-10 w-32 rounded-lg bg-brand-navy/10" />
    </div>
  );
}
