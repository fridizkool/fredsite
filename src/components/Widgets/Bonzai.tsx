import React from "react";
import { useEffect, useRef, useState } from "react";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [clicked, setClicked] = useState(false);
  const congalala = useRef<HTMLImageElement>(null);
  useEffect(() => {
    congalala.current = document.createElement("img");
  }, []);

  return (
    //dumbest possible way of doing, for funsies
    <>
      <a onClick={() => setEnable(!enable)}>Bonzai Conga</a>
      {enable && (
        <div className="fixed z-100">
          <img
            ref={congalala}
            src="congalala.png"
            draggable="false"
            onMouseMove={(event) => {
              if (congalala.current && clicked)
                congalala.current.style =
                  "position: fixed; left: " +
                  (event.pageX - 500) +
                  "px; top: " +
                  (event.pageY - 500) +
                  "px;";
              console.log(event);
            }}
            onClick={() => setClicked(!clicked)}
          />
        </div>
      )}
    </>
  );
}
