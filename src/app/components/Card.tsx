export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/[.92] p-9 shadow-md">{children}</div>
  );
}
