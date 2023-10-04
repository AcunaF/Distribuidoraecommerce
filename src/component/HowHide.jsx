import { useState } from "react";

import "./HowHide.css";

function HowHide() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <h3>Visible </h3> : <h3>Hidden</h3>}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default HowHide;
