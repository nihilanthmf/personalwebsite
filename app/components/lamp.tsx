export default function Lamp() {
  return (
    <svg
      width="532"
      height="543"
      viewBox="0 0 532 543"
      className="fixed z-50 bottom-0 w-full h-full"
    >
      <defs>
        <filter id="lampFlickerShadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="28"
            flood-color="#fff"
            flood-opacity="1"
          />
        </filter>
      </defs>
      <path
        d="M232.525 0L379.16 152.811L532 299.417L0 543L232.525 0Z"
        fill="white"
        className="lampFlicker top-[30%] right-[30%]"
        filter="url(#lampFlickerShadow)"
      />
    </svg>
  );
}
