function initialHash() {
    'use strict';
    window.location.href = "#";
  }
  
  console.log('happy');
  function handleTouch(e) {
    var x = e.changedTouches[0].clientX;
    console.log(x);
    var total = this.clientWidth;
    var position = x - total;
    // clientX -clientWidth
    if ( position < 0 ) this.style.left = (x-total) + 'px'
    else if (position >= 0) this.style.left = 0 + 'px'
  }
  function handleTouchEnd(e) {
      var x = e.changedTouches[0].clientX;
    var total = this.clientWidth;
    var position = x - total;
    this.style.left = "";
    if ( position <= -total*0.5 ) initialHash();
  }
  document.querySelector('#nav').addEventListener('touchstart', handleTouch, false)
  document.querySelector('#nav').addEventListener('touchmove', handleTouch, false)
  document.querySelector('#nav').addEventListener('touchend', handleTouchEnd, false)
  document.getElementById('nav_modal').addEventListener('click', initialHash, false);