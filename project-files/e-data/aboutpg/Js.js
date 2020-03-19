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
