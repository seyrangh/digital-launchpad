// components/Bounding.tsx
type Props = {
  children: React.ReactNode;
};

export default function Bounding({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}
