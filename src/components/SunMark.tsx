export function SunMark({
  className = "h-10 w-10",
  spin = true,
}: {
  className?: string;
  spin?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${spin ? "sun-spin" : ""} ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform="translate(32 32)"
      >
        <line x1="0" y1="-13" x2="0" y2="-24" />
        <line x1="0" y1="13" x2="0" y2="24" />
        <line x1="-13" y1="0" x2="-24" y2="0" />
        <line x1="13" y1="0" x2="24" y2="0" />
        <line x1="-9.2" y1="-9.2" x2="-17" y2="-17" />
        <line x1="9.2" y1="9.2" x2="17" y2="17" />
        <line x1="9.2" y1="-9.2" x2="17" y2="-17" />
        <line x1="-9.2" y1="9.2" x2="-17" y2="17" />
      </g>
    </svg>
  );
}
