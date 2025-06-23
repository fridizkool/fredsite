import type { IconProps } from "../../types/IconProps";

export function MenuIcon(props: IconProps) {
  return (
    <svg
      style={{ height: "inherit", width: "inherit" }}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 7L4 7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12L4 12" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17L4 17" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
