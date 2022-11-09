/*// Main sections  
const sections = document.querySelectorAll("section.main-section");
// Section anchors
const anchors = document.querySelectorAll("#top-menu ul li");
  
// Scroll to the top on document load
document.addEventListener("DOMContentLoaded", windowScroll);

// Handle mouse wheel event
window.addEventListener("wheel", function(ev) {
  ev.preventDefault();
  if(ev.deltaY > 0) {
    moveSectionDownward();
  } else if(ev.deltaY < 0) {
    moveSectionUpward();
  }
}, {passive : false});

// Handle keyup event
window.addEventListener("keyup", function(ev) {
  ev.preventDefault();
  if(ev.key === "ArrowDown") {
    moveSectionDownward();
  } else if(ev.key === "ArrowUp") {
    moveSectionUpward();
  }
});

// Handle touchstart event
window.addEventListener("touchstart", function(ev) {
  ev.preventDefault();
  touchStartYPos = ev.changedTouches[0].screenY;
}, {passive : false});

// Handle touchend event
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
  let current = getActiveSection();
  
  if(current.index < sections.length - 1) {
    let target = sections[current.index + 1];
    moveSection(current, target);
  }
}

function moveSectionUpward() {
  let current = getActiveSection();

  if(current.index > 0){
    let target = sections[current.index - 1];
    moveSection(current, target);
  }
    
}

function moveSection(current, target) {

  target.classList.add("active");
  current.element.classList.remove("active");
  windowScroll(target.offsetTop);
    
  for(let i=0; i<anchors.length; i++) {
    if(anchors[i].children[0].hash === "#"+target.id) {
      anchors[i].children[0].parentElement.classList.add("active");
    } else {
      anchors[i].children[0].parentElement.classList.remove("active");
    }
  }
}

function getActiveSection() {
  let current;
  sections.forEach(function(el, ind) {
    if(el.classList.contains("active")) {
      current = {element : el, index : ind};
      return;
    }
  });
  return current;
}

function windowScroll(top = 0) {
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
})*/