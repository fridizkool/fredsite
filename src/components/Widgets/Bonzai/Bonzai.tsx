import { useEffect, useRef, useState } from "react";
import { Bonzais } from "./BonzaiText";
import Draggable from "react-draggable";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [curText, setCurText] = useState("");
  const congalala = useRef<HTMLDivElement>(null);

  useEffect(() => {
    congalala.current = document.createElement("div");
  }, []);

  function search() {
    if (!congalala.current) return;
    const coords = breakTransform(congalala.current.style.transform);
    const x = coords.x + congalala.current.offsetLeft - 1;
    const y = coords.y + congalala.current.offsetTop - 1;
    const ele = document.elementFromPoint(x, y);
    if (!ele) {
      setCurText("");
      return;
    }
    console.log(ele);
    if (Bonzais[ele.id]) setCurText(Bonzais[ele.id]);
  }

  function breakTransform(transform: string) {
    const location = transform.substring(10).split(")")[0];
    const parts = location.split(", ");
    const coords = {
      x: Number.parseInt(parts[0].split("px")[0]),
      y: Number.parseInt(parts[1].split("px")[0]),
    };
    console.log(location);
    return coords;
  }

  return (
    //dumbest possible way of doing, for funsies
    <>
      <a onClick={() => setEnable(!enable)} className="cursor-pointer">
        Bonzai Conga
      </a>
      {enable && (
        <Draggable
          nodeRef={congalala}
          onStop={() => {
            search();
          }}
        >
          <div ref={congalala}>
            <img
              src="congalala.png"
              draggable="false"
              className="draggable-box"
              width={window.innerWidth / 10}
              height={window.innerHeight / 10}
            />
            <span>{curText}</span>
          </div>
        </Draggable>
      )}
    </>
  );
}

/*Use document.elementByPoint to find bonzai suggestions */
