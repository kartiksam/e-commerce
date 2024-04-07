import React from "react";
//in strong to make it bold isko import kr rhe h buynow me wha buynow.css hai already so this class csss also apply there
const Subtotal = () => {
  return (
    <div className="sub_item">
      <h3>
        Subtotal (1 items):
        <strong style={{ fontWeight: 700, color: "#111" }}>Rs 4049.00</strong>
      </h3>
    </div>
  );
};

export default Subtotal;
