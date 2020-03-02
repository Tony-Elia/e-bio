var side = false;

function rotate180() {
  if (side == false) {
    document.getElementById("toggler-arrow").style.marginLeft = "300px";
    document.getElementById("ar").classList.add("rotate");
    document.getElementById("sideBar").style.left = "0px";
    side = true;
  } else {
    document.getElementById("toggler-arrow").style.marginLeft = "0";
    document.getElementById("ar").classList.remove("rotate");
    document.getElementById("sideBar").style.left = "-300px";
    side = false;
  }
}
