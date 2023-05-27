import { useGlobleContext } from "../context/Context";
import "./paginatioin.css";

export default function Paginatioin() {
  const { pageItriate, page, nbPages } = useGlobleContext();
  return (
    <div className="paginatioinn">
      <div className="container">
        <button onClick={() => pageItriate("preview")}>Preview</button>
        <p>
          {page} of {nbPages}
        </p>
        <button onClick={() => pageItriate("next")}>Next</button>
      </div>
    </div>
  );
}
