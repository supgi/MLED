function imageSrc (element, source) {

  element.target.parentNode.parentNode.getElementsByTagName('img')[0].src = source

}

function checkLenght (arr, n, index) {

  let x = n + index;

  if (x < 0 || x >= arr.length) {

    return false;

  } else {

    return true

  }

}

export default function imageSet (e, ctx, callback, dir) {

  if (dir >= 1 && checkLenght(ctx.src, 1, ctx.indx)) {

    imageSrc(e, ctx.src[ctx.indx + 1])

    return callback({
      src: ctx.src,
      indx: ctx.indx + 1
    })

  } else if (dir <= 0 && checkLenght(ctx.src, -1, ctx.indx)) {

    imageSrc(e, ctx.src[ctx.indx - 1])

    return callback({
      src: ctx.src,
      indx: ctx.indx - 1
    })

  }

}
