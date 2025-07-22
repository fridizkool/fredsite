import { useEffect, useRef, useState } from "react";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [clicked, setClicked] = useState(false);
  const congalala = useRef<HTMLImageElement>(null);

  useEffect(() => {
    congalala.current = document.createElement("img");
    setClicked(false);
  }, []);

  return (
    //dumbest possible way of doing, for funsies
    <>
      <a
        onClick={() => {
          setEnable(!enable);
          setClicked(false);
        }}
      >
        Bonzai Conga
      </a>
      {enable && (
        <img
          ref={congalala}
          src="congalala.png"
          draggable="false"
          className="fixed z-10"
          width="1000px"
          height="1000px"
          onMouseDown={(event) => {
            event.preventDefault();
            setClicked(true);
          }}
          onMouseUp={() => setClicked(false)}
          onMouseLeave={() => setClicked(false)}
          onMouseMove={(event) => {
            if (!clicked || !congalala.current) return;

            congalala.current.style.top =
              event.clientY - congalala.current.height / 2 + "px";
            congalala.current.style.left =
              event.clientX - congalala.current.width / 2 + "px";
          }}
        />
      )}
    </>
  );
}
