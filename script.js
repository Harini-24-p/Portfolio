$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar//
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
});


function downloadFile() {
    const link = document.createElement('a');
    link.href = 'images/resume.jpeg';
    link.download = 'Harini_Prakash_Resume.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
