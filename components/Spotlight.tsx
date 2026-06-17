/** Aceternity-style animated spotlight beam (pure SVG + CSS). */
export default function Spotlight({
  fill = "#8b7dff",
  style,
}: {
  fill?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className="lg-spotlight"
      style={style}
      viewBox="0 0 3787 2842"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g filter="url(#spotlight_blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="spotlight_blur"
          x="0.86"
          y="0.84"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="151" />
        </filter>
      </defs>
    </svg>
  );
}
