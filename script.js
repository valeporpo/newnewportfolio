  const sections = document.querySelectorAll("section");
  const anchors = document.querySelectorAll("#top-menu ul li");

  window.addEventListener("wheel", function(ev) {
    ev.preventDefault();
    if(ev.deltaY > 0) {
        moveSectionDownward();
    } else if(ev.deltaY < 0) {
        moveSectionUpward();
    }
  }, {passive : false});

  window.addEventListener("keyup", function(ev) {
    ev.preventDefault();
    if(ev.key === "ArrowDown") {
        moveSectionDownward();
    } else if(ev.key === "ArrowUp") {
        moveSectionUpward();
    }
  });

  window.addEventListener("touchstart", function(ev) {
    ev.preventDefault();
    touchStartYPos = ev.changedTouches[0].screenY;
  }, {passive : false});

  window.addEventListener("touchend", function(ev) {
    ev.preventDefault();
    touchEndYPos = ev.changedTouches[0].screenY;
    if(touchEndYPos < touchStartYPos) {
      moveSectionDownward();
    } else if(touchEndYPos > touchStartYPos) {
      moveSectionUpward();
    }
  }, {passive : false});

  function moveSectionDownward() {
    let current;
    sections.forEach(function(el, ind) {
      let obj = el.getBoundingClientRect();
      if(obj.top === 0 || (obj.top < 0 && obj.bottom > 0)) {
          current = {element : el, index : ind};
          return;
      }
    });

    if(current.index < sections.length - 1){
      let target = sections[current.index + 1]
      windowScroll(target.offsetTop);
      for(let i=0; i<anchors.length; i++) {
        if(anchors[i].children[0].hash === "#"+target.id) {
          anchors[i].children[0].parentElement.classList.add("active");
        } else {
          anchors[i].children[0].parentElement.classList.remove("active");
        }
      }
    }
    
    
  }

  function moveSectionUpward() {
    let current;  
    sections.forEach(function(el, ind) {
      let obj = el.getBoundingClientRect();
      if(obj.top === 0 || (obj.top < 0 && obj.bottom > 0)) {
          current = {element : el, index : ind};
          return;
      }
    });

    if(current.index > 0){
      let target = sections[current.index - 1]
      windowScroll(target.offsetTop);
      
      for(let i=0; i<anchors.length; i++) {
        if(anchors[i].children[0].hash === "#"+target.id) {
          anchors[i].children[0].parentElement.classList.add("active");
        } else {
          anchors[i].children[0].parentElement.classList.remove("active");
        }
      }
    }
    
  }

  function windowScroll(top) {
    window.scroll({
      left : 0,
      top : top,
      behavior : "smooth"
    });
  }

  document.getElementById("submit").addEventListener("click", function() {
    console.log("click");
  });
  anchors.forEach(function(el, ind) {
    console.log("clicked anchor");
  })