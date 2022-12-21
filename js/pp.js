const fadeOut = function (element, startFadingOutAfter = 2000, speed = 1) {
    // speed must be greater than zero
    speed = speed <= 0 ? 1 : speed;
  
    setTimeout(function () {
      const timerId = setInterval(function () {
        const opacity = element.style.opacity;
        if (opacity == 0) {
          clearInterval(timerId);
        } else {
          element.style.opacity = opacity - 0.05;
        }
      }, 100 / speed);
    }, startFadingOutAfter);
  
    element.style.opacity = 1;
  };