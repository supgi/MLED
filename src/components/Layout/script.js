import particle from './particle'

export default function script(mobile) { try {return (

  window.onresize = function(event) {

    if (document.getElementsByTagName('body')[0].clientWidth <= 420) {

      mobile(true)

    } else {

      mobile(false)

    }

  },

  window.onload = function() {

    document.querySelector('header').addEventListener('mousemove', function(event) {

      console.log("Mouse Over");
      let posX = event.clientX, posY = event.clientY;
      particle(posX, posY, document.getElementById('headerEffect'))

    })

  },

  document.onload = function() {

    if (document.getElementsByTagName('body')[0].clientWidth <= 420) {

      mobile(true)

    } else {

      mobile(false)

    }

  }


)} catch (e) {}}
