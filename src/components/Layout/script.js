export default function script(mobile) { try {return (

  window.onresize = function(event) {
    if (screen.width < 400) {

      mobile(true)

    } else {

      mobile(false)

    }
  }


)} catch (e) {}}
