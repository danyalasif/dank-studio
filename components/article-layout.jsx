export function ArticleLayout({ children, sidebar }) {
  const contentClasses = 'mx-auto max-w-7xl px-8 py-16 sm:px-12 md:px-16 lg:px-24 xl:px-32';

  if (sidebar) {
    return (
      <div className={contentClasses}>
        <div className="grid gap-12 lg:grid-cols-[1fr,320px]">
          <div className="min-w-0">{children}</div>
          <aside className="lg:sticky lg:top-24 lg:self-start">{sidebar}</aside>
        </div>
      </div>
    );
  }

  return <div className={contentClasses}>{children}</div>;
}
