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

    document.getElementsByTagName('body')[0].addEventListener('mousemove', function(event) {try{

      let maxY = document.getElementsByTagName('header')[0].getBoundingClientRect().height - 1;

      let posX = event.clientX, posY = event.clientY;

      if (posY <= maxY) {
        particle(posX, posY, document.getElementById('headerEffect'))
      }

    } catch(err) {}})

  },

  document.onload = function() {

    if (document.getElementsByTagName('body')[0].clientWidth <= 420) {

      mobile(true)

    } else {

      mobile(false)

    }

  }


)} catch (e) {}}
