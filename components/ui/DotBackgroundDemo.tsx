import React from "react";

export default function DotBackground() {
  return (
    <div className="fixed inset-0 h-full w-full z-0 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #000000,#000000 30%, #001d62 110%)
            
          `,
        }}
      ></div>
    </div>
  );
}
