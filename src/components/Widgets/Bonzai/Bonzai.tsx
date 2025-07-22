import { useEffect, useRef, useState } from "react";
import { Bonzais } from "./BonzaiText";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [curText, setCurText] = useState("poop");
  const congalala = useRef<HTMLImageElement>(null);

  useEffect(() => {
    congalala.current = document.createElement("img");
    setClicked(false);
  }, []);

  useEffect(() => {
    setClicked(false);
  }, [enable]);

  function search(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    event.preventDefault();
    setClicked(false);
    if (!congalala.current) return;
    const x = congalala.current.x - 1;
    const y = congalala.current.y - 1;
    const ele = document.elementFromPoint(x, y);
    if (!ele) {
      setCurText("");
      return;
    }
    if (Bonzais[ele.id]) setCurText(Bonzais[ele.id]);
  }

  return (
    //dumbest possible way of doing, for funsies
    <>
      <a onClick={() => setEnable(!enable)} className="cursor-pointer">
        Bonzai Conga
      </a>
      {enable && (
        <div className="fixed">
          <span>{curText}</span>
          <img
            ref={congalala}
            src="congalala.png"
            draggable="false"
            className="fixed z-10 cursor-grab select-none"
            width={window.innerWidth / 10}
            height={window.innerHeight / 10}
            onMouseDown={(event) => {
              event.preventDefault();
              setClicked(true);
            }}
            onMouseUp={search}
            onMouseLeave={search}
            onMouseMove={(event) => {
              if (!clicked || !congalala.current) return;

              congalala.current.style.top =
                event.clientY - congalala.current.height / 2 + "px";
              congalala.current.style.left =
                event.clientX - congalala.current.width / 2 + "px";
            }}
          />
        </div>
      )}
    </>
  );
}

/*Use document.elementByPoint to find bonzai suggestions */
