import SvgTagProps from '@/types/SvgTagProps';

const MoonIcon = ({ className }: SvgTagProps) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="96" height="96" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_103_2951" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_103_2951"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MoonIcon;
