type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[640px] ${className}`}>
      <div className="text-sm font-bold tracking-[0.04em] text-accent uppercase">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-0.02em] leading-[1.15] text-fg">
        {title}
      </h2>
    </div>
  );
}
