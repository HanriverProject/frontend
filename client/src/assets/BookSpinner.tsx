import SvgTagProps from '@/types/SvgTagProps';

const BookSpinner = ({ className }: SvgTagProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80px"
      height="80px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <path
        d="M20 25L80 25L80 75L20 75Z"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      />
      <path
        d="M 50 25 L 80 25 L 80 75 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
          keyTimes="0;0.5;0.501;1"
          dur="0.8"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="1;1;0;0"
          keyTimes="0;0.5;0.5001;1"
          dur="0.8"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 50 25 L 71.29 23.5483 L 71.29 76.4517 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
          keyTimes="0;0.5;0.501;1"
          dur="0.8"
          begin="-0.1328s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="1;1;0;0"
          keyTimes="0;0.5;0.5001;1"
          dur="0.8"
          begin="-0.1328s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 50 25 L 61.45 21.9083 L 61.45 78.0917 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
          keyTimes="0;0.5;0.501;1"
          dur="0.8"
          begin="-0.264s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="1;1;0;0"
          keyTimes="0;0.5;0.5001;1"
          dur="0.8"
          begin="-0.264s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 50 25 L 20 25 L 20 75 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
          keyTimes="0;0.499;0.5;1"
          dur="0.8"
          begin="-0.264s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;0;1;1"
          keyTimes="0;0.4999;0.5;1"
          dur="0.8"
          begin="-0.264s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 50 25 L 20 25 L 20 75 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
          keyTimes="0;0.499;0.5;1"
          dur="0.8"
          begin="-0.1328s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;0;1;1"
          keyTimes="0;0.4999;0.5;1"
          dur="0.8"
          begin="-0.1328s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 50 25 L 21.25 24.7917 L 21.25 75.2083 L 50 75"
        ng-attr-fill="{{config.fill}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-width="{{config.width}}"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="#ffffcb"
        stroke="#ff7c81"
        stroke-width="5"
      >
        <animate
          attributeName="d"
          calcMode="linear"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
          keyTimes="0;0.499;0.5;1"
          dur="0.8"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;0;1;1"
          keyTimes="0;0.4999;0.5;1"
          dur="0.8"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default BookSpinner;
