export default function particle(x, y, element) {try{

  if (element.children.length > 100) {return}

  let el = document.createElement('div');
  el.style.position = "absolute";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.height = "6px";
  el.style.width = "6px";
  el.style.backgroundColor = `rgba(${random(100, 255)}, 0, ${random(100, 255)}, 0.2)`;

  setTimeout(function(){move(el, 1)}, 50)

  element.appendChild(el)


} catch(e) {console.log(e);} }

function move(el, count) {

  let dir = random(0, 3)

  if (count == 20) {

    return el.remove()

  } else if (dir < 1) {

    el.style.left = (pxToNumber(el.style.left) - 1) + "px";

  } else if (dir == 2) {

    el.style.left = (pxToNumber(el.style.left) - 1) + "px";
    el.style.top = (pxToNumber(el.style.top) - 1) + "px";

  } else {

    el.style.top = (pxToNumber(el.style.top) - 1) + "px";

  }

  setTimeout(function() {move(el, count + 1)}, 50)

}

function pxToNumber(string) {

  return parseInt(string.substring(0, string.indexOf("px")))

}

function random (min, max) {

  return Math.random() * (max - min) + min;

}
