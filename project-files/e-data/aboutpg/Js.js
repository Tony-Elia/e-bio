var side = false;

function rotate180() {
  if (side == false) {
    document.getElementById("toggler-arrow").style.marginLeft = "270px";
    document.getElementById("ar").classList.add("rotate");
    document.getElementById("sideBar").style.left = "0px";
    side = true;
  } else {
    document.getElementById("toggler-arrow").style.marginLeft = "0";
    document.getElementById("ar").classList.remove("rotate");
    document.getElementById("sideBar").style.left = "-270px";
    side = false;
  }
}

let elementsArray = document.querySelectorAll(".dropdown-toggle");

elementsArray.forEach(function(elem) {
  var rotation = false;
  elem.addEventListener("click", function() {
    if (rotation == false) {
      elem.classList.add("rotate");
      rotation = true;
    } else {
      elem.classList.remove("rotate");
      rotation = false;
    }
    });
});

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bars = document.querySelector(".bars");
const navigationBar = document.querySelector("#Navbar");
var toggle = false;


bars.addEventListener("click", function () {

  navigationBar.classList.toggle("curtain");
  if (toggle == false) {

    bar1.style.transform = "rotate(45deg)";
    bar1.style.transform += "translateY(5px)";
    bar1.style.transform += "translateX(5px)";

    bar2.style.borderColor = "white";

    bar3.style.transform = "rotate(-45deg)";
    bar3.style.transform += "translateY(-5px)";
    bar3.style.transform += "translateX(5px)";

    toggle = true;
  } else {
    bar1.style.transform = "rotate(0deg)";
    bar2.style.borderColor = "black";
    bar3.style.transform = "rotate(0deg)";
    toggle = false;
  }

});
