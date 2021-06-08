import React from "react";
import "../style/clinet-slider.scss";
import Item from "./client-slider-item";
var x =[];
for (let index = 0; index < 15; index++) {
  x[index]=index+1;
    
}

const item=x.map(()=>{
    return <Item/>;
})


const Slider = () => {
  return (
    <div className="slider">
    {item}
    </div>
  );
};
export default Slider;
setTimeout(()=>{
    let slider = document.querySelector(".slider");
    let isDonw = false,
      startX,
      scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDonw = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleav", () => {
      isDonw = false;
    });
    slider.addEventListener("mouseup", () => {
      isDonw = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDonw) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
    
      const walk = (x - startX)*2;
      slider.scrollLeft = scrollLeft - walk;
    },3000);
    
})


