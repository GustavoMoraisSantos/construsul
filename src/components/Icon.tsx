type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  bag: (
    <>
      <path d="M6 8h12l1.2 11a2 2 0 0 1-2 2.2H6.8a2 2 0 0 1-2-2.2L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  tile: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  pipe: (
    <>
      <path d="M4 9h6v6H4z" />
      <path d="M10 12h5a3 3 0 0 0 3-3V5" />
      <path d="M15 5h5M15 9h5" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.2-2.2 2.6-2.6Z" />
    </>
  ),
  roof: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M9 19v-5h6v5" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v5H4v-5" />
      <path d="M6 16h12" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
    </>
  ),
  helmet: (
    <>
      <path d="M3 17a9 9 0 0 1 18 0" />
      <path d="M2 17h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2Z" />
      <path d="M10 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4Z" />
      <path d="M8 11h8M8 15h6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
    </>
  ),
  store: (
    <>
      <path d="M4 9 5 4h14l1 5" />
      <path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 12 2 2a1.5 1.5 0 0 0 2.1-2.1L12 8.8 8.5 7 3 9.5" />
      <path d="M21 9.5 15.5 7 12 8.8" />
      <path d="m7 13-2 2M9.5 15l-2 2M12 16.5l-1.5 1.5" />
    </>
  ),
  star: (
    <>
      <path d="M12 3.5 14.6 9l5.9.8-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.8 9.4 9 12 3.5Z" />
    </>
  ),
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
