const Red = document.getElementsByClassName("R");
const Green = document.getElementsByClassName("G");
const Blue = document.getElementsByClassName("B");
const result = document.getElementsByClassName("Hex");
const B1 = document.getElementsByClassName("box1");
const B2 = document.getElementsByClassName("box2");
const B3 = document.getElementsByClassName("box3");

const inputHandler = function (e) {
  if (e.srcElement === result[0]) {
    //B2[0].style.backgroundColor = result[0].value;
    Red[0].value = hexToRgb(result[0].value).r;
    Green[0].value = hexToRgb(result[0].value).g;
    Blue[0].value = hexToRgb(result[0].value).b;
  } else {
    redcol = parseInt(Red[0].value, 10);
    greencol = parseInt(Green[0].value, 10);
    bluecol = parseInt(Blue[0].value, 10);

    result[0].value = rgbToHex(redcol, greencol, bluecol);
  }

  B1[0].style.backgroundColor = muldiv(result[0].value, 0.5);
  B1[0].innerHTML = muldiv(result[0].value, 0.5);
  B1[0].style.color = "white";
  B2[0].style.backgroundColor = result[0].value;
  B2[0].innerHTML = result[0].value;
  B3[0].style.backgroundColor = muldiv(result[0].value, 2);
  B3[0].innerHTML = muldiv(result[0].value, 2);
};

Red[0].addEventListener("input", inputHandler);
Red[0].addEventListener("propertychange", inputHandler);
Green[0].addEventListener("input", inputHandler);
Green[0].addEventListener("propertychange", inputHandler);
Blue[0].addEventListener("input", inputHandler);
Blue[0].addEventListener("propertychange", inputHandler);
result[0].addEventListener("input", inputHandler);
result[0].addEventListener("propertychange", inputHandler);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function muldiv(hex, factor) {
  return (
    "#" +
    componentToHex(parseInt(hexToRgb(hex).r * factor, 10)) +
    componentToHex(parseInt(hexToRgb(hex).g * factor, 10)) +
    componentToHex(parseInt(hexToRgb(hex).b * factor, 10))
  );
}
