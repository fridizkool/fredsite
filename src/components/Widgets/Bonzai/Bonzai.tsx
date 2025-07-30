import { useEffect, useRef, useState } from "react";
import { Bonzais } from "./BonzaiText";
import Draggable from "react-draggable";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [curText, setCurText] = useState("");
  const draggableNode = useRef<HTMLDivElement>(null);
  const congalala = useRef<HTMLImageElement>(null);

  useEffect(() => {
    draggableNode.current = document.createElement("div");
    congalala.current = document.createElement("img");
  }, []);

  function search() {
    if (!draggableNode.current || !congalala.current) return;
    const coords = breakTransform(draggableNode.current.style.transform);
    const x = coords.x - 1 + draggableNode.current.offsetLeft; //accurate position
    const y = coords.y - 1 + draggableNode.current.offsetTop;
    const ele = document.elementFromPoint(x, y);
    if (!ele || !Bonzais[ele?.id]) {
      return null;
    }
    return ele;
  }

  function dragSearch() {
    if (!draggableNode.current || !congalala.current) return;
    const ele = search();
    if (!ele) {
      congalala.current.className = "";
      setCurText("");
      return;
    }
    congalala.current.className = "animate-talk";
  }

  function stopSearch() {
    if (!draggableNode.current || !congalala.current) return;
    const ele = search();
    if (!ele) {
      setCurText("");
      return;
    }
    setCurText(Bonzais[ele.id]);
  }

  function breakTransform(transform: string) {
    //could there be a better way, perhaps
    if (!transform) return { x: 0, y: 0 };
    const location = transform.substring(10).split(")")[0];
    const parts = location.split(", ");
    if (parts.length < 2) return { x: 0, y: 0 };
    const coords = {
      x: Number.parseInt(parts[0].split("px")[0]),
      y: Number.parseInt(parts[1].split("px")[0]),
    };
    return coords;
  }

  return (
    <>
      <a onClick={() => setEnable(!enable)} className="cursor-pointer">
        Bonzai Conga
      </a>
      {enable && (
        <Draggable
          nodeRef={draggableNode}
          onStop={() => {
            stopSearch();
          }}
          onDrag={() => {
            dragSearch();
          }}
        >
          <div ref={draggableNode} className="draggable-box">
            <img
              ref={congalala}
              src="congalala.png"
              draggable="false"
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
