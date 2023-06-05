type Props = {
  name: string;
  size?: number;
  width?: number;
  height?: number;
};

export function Icon({ name, height, width, size = 24 }: Props) {
  const iconWidth = width ?? size;
  const iconHeight = height ?? size;
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <svg
      style={{
        width: `${iconWidth}px`,
        height: `${iconHeight}px`,
      }}
    >
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
}
