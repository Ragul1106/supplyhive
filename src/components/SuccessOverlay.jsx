import React from "react";
import Confetti from "react-confetti";

export function SuccessOverlay() {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="fixed inset-0 z-">
      <div className="absolute inset-0 bg-blue-600" />

      <Confetti
        width={size.width}
        height={size.height}
        className="pointer-events-none absolute inset-0 z-"
        numberOfPieces={500}
        recycle={false}
        gravity={0.6}
      />

      <div className="absolute inset-0 z- flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-9 h-9">
              <path
                d="M20 6L9 17l-5-5"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-white text-2xl sm:text-3xl font-semibold">
            Order Place Successfully
          </p>
        </div>
      </div>
    </div>
  );
}
