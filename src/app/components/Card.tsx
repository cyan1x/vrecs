export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/[.92] p-6 shadow-xl md:p-6 md:px-8">
      {children}
    </div>
  );
}
