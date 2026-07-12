interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">{title}</h1>
      <p className="mt-2 text-sm text-forest/60">Last updated: {lastUpdated}</p>
      <div className="prose-legal mt-8 space-y-6 text-forest/80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-forest">{title}</h2>
      <div className="mt-3 space-y-3 text-sm sm:text-base">{children}</div>
    </section>
  );
}
