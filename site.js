document.addEventListener('DOMContentLoaded', function(){
  try{
    var path = location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(function(a){
      var href = a.getAttribute('href');
      if(!href) return;
      if(href === path || (href === 'index.html' && (path === '' || path === 'index.html'))){
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });

    // Update footer year if present
    var year = new Date().getFullYear();
    var footerBottom = document.querySelector('footer .footer-bottom');
    if(footerBottom){
      var spans = footerBottom.querySelectorAll('span');
      if(spans.length>0){
        spans[0].textContent = '© ' + year + ' गुरुकुल परिवार, पुणे';
      }
    }
  }catch(e){console && console.warn && console.warn(e);} 
});
