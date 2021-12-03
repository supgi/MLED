import particle from './particle'

export default function script() { try {return (

  window.onload = function() {

    document.getElementsByTagName('body')[0].addEventListener('mousemove', function(event) {try{

      let maxY = document.getElementsByTagName('header')[0].getBoundingClientRect().height - 1;

      let posX = event.clientX, posY = event.clientY;

      if (posY <= maxY) {
        particle(posX, posY, document.getElementById('headerEffect'))
      }

      let menuToggle = document.querySelector('.toggle');
      menuToggle.addEventListener('click', function() {

        menuToggle.classList.toggle('active')

      })

      let menu = document.querySelector('.menu');
      menuToggle.addEventListener('click', function() {

        menu.classList.toggle('active')

      })

    } catch(err) {}})

  }


)} catch (e) {}}
