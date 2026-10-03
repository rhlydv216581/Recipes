import { useState } from "react";
import "./Lense.scss";

export default function Lens({ children }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [showLens, setShowLens] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      className="lens"
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="lens__content">{children}</div>

      {showLens && (
        <div
          className="lens__zoom"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}