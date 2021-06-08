import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
// import loading from "./images/loading.gif";
import "./style/style-header.scss"

import Header from "./components/header";
import Main from "./components/main"
import Clinet from "./components/clients-testimonial"
import Questions from "./components/questions"
import Contact from "./components/contact-us"

const App = () => {
  return (
    <div>
  <Header />
  <Main/>
  <Clinet/>
  <Questions/>
  <Contact/>
  <div style={{margin:"20px" , textAlign:"center" , fontSize:"30px"}}>
    Assel Al Assel
  </div>
  </div>
  )
};
reactDom.render(<App />, document.getElementById("root"));

setTimeout(()=>{
let x = document.querySelectorAll(".ques-text");
x.forEach(ele => {
  ele.addEventListener("click" , ()=>{
    
if(ele.classList.contains("plus")){
  ele.classList.remove("plus");
  ele.classList.add("minus");
  document.querySelector("#logo").innerHTML="-"
}else{
  ele.classList.remove("minus");
  ele.classList.add("plus");
  document.querySelector("#logo").innerHTML="+"

}
  })
});

}, 500);
