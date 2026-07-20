type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.55-1.5H16.7V3.3C16.4 3.26 15.4 3.17 14.2 3.17c-2.4 0-4.05 1.47-4.05 4.16v2.47H7.4v3.2h2.75V21h3.35Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 17.5c.6-1.6 1.1-3.3 1.6-5.1M12 12.2c.35-1.2 2.7-1.4 3.1.15.4 1.5-.6 3.35-2.1 3.35-.7 0-1.15-.35-1.4-.8" />
    </svg>
  );
}
