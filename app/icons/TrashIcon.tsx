interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function TrashIcon({
  width = 19,
  height = 24,
  color = "currentColor",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 5.5H17.5M7.5 10.5V17.5M11.5 10.5V17.5M2.5 5.5L3.5 20.5C3.5 21.0523 3.94772 21.5 4.5 21.5H14.5C15.0523 21.5 15.5 21.0523 15.5 20.5L16.5 5.5M6.5 5.5V3C6.5 2.44772 6.94772 2 7.5 2H11.5C12.0523 2 12.5 2.44772 12.5 3V5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
