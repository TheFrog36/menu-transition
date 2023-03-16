let isHorizontal = false


function startAnimation(){
    const elements = document.querySelectorAll('.menu-bar-container');
    
    elements.forEach((element) => {
      if(isHorizontal) element.classList.remove('menu-horizontal');
      else element.classList.add('menu-horizontal');
    });
    isHorizontal = !isHorizontal
}