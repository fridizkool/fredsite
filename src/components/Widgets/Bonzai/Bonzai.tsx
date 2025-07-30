import { useEffect, useRef, useState } from "react";
import { Bonzais } from "./BonzaiText";
import Draggable from "react-draggable";
import QuestionIcon from "../../Icons/Question";

export default function Bonzai() {
  const [enable, setEnable] = useState(false);
  const [curText, setCurText] = useState("");
  const draggableNode = useRef<HTMLDivElement>(null);
  const congalala = useRef<HTMLImageElement>(null);

  useEffect(() => {
    draggableNode.current = document.createElement("div");
    congalala.current = document.createElement("img");
  }, []);

  useEffect(() => {
    setCurText("");
  }, [enable]);

  function search() {
    if (!draggableNode.current || !congalala.current) return;
    const coords = breakTransform(draggableNode.current.style.transform);
    const x = coords.x - 1 + draggableNode.current.offsetLeft; //accurate position
    const y = coords.y - 1 + draggableNode.current.offsetTop;
    let ele = document.elementFromPoint(x, y);
    while (ele?.parentElement != null) {
      //search parents for conga
      if (ele && Bonzais[ele?.id]) return ele;
      ele = ele.parentElement;
    }
    return null;
  }

  function dragSearch() {
    if (!draggableNode.current || !congalala.current) return;
    const ele = search();
    if (!ele) {
      congalala.current.className = "";
      setCurText("");
      return;
    }
    congalala.current.className = "animate-wiggle";
  }

  function stopSearch() {
    if (!draggableNode.current || !congalala.current) return;
    const ele = search();
    if (!ele) {
      setCurText("");
      return;
    }
    congalala.current.className = "animate-talk";
    setCurText(Bonzais[ele.id]);
  }

  function dragStart() {
    if (!draggableNode.current || !congalala.current) return;
    setCurText("");
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
      <a
        onClick={() => setEnable(!enable)}
        className="cursor-pointer"
        tabIndex={0}
        title="Open Bonzai Conga"
      >
        <QuestionIcon
          className="stroke-white object-contain"
          height="55px"
          width="55px"
        />
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
          onStart={() => {
            dragStart();
          }}
        >
          <div
            ref={draggableNode}
            className="draggable-box max-w-4/12 min-w-4/12"
            title="Drag me over something you want to know more about. When I dance I have information."
          >
            <img ref={congalala} src="congalala.png" draggable="false" />
            {curText !== "" && (
              <div className="shadow-2xl border-2 border-trimary-bg bg-primary-bg text-white min-w-fit">
                {curText}
              </div>
            )}
          </div>
        </Draggable>
      )}
    </>
  );
}

/*Use document.elementByPoint to find bonzai suggestions */
