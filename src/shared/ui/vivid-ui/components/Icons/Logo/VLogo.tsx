type Props = {
  color?: string;
  size?: number;
};

export const VLogo = ({ color, size = 24 }: Props) => {
  return (
    <svg
      fill={color}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.081 21 2.188 3h5.86l2.154 6.293c1.022 3.07 1.597 4.98 1.723 5.73.207-1.043.833-2.953 1.879-5.73L16.165 3h5.653l-7.376 18h-5.36Z" />
    </svg>
  );
};
