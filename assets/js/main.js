(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar'); 
  }); 
  
 // menu 
  $('.pay_btn').click( function (){ 
    $('.order-infos').addClass('sideItem'); 
  }); 
  
 // menu 
  $('.group_btns a').click( function (event){ 
    event.preventDefault()
    $('.order-infos').removeClass('sideItem'); 
  }); 

  $(document).ready(function() {
    $('select').niceSelect();
});
   
const  payBtn = document.querySelectorAll('.pay_opt button')
payBtn.forEach(payBtns => {
  payBtns.addEventListener('click' , () => {
    removeActive()
    payBtns.classList.add('active')
  })
})

function removeActive() {
  payBtn.forEach(payBtns => {
    payBtns.classList.remove('active')
  })
}


})(jQuery);
