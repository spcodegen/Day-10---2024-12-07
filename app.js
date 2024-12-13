let isClicked;

$('#btnAdd').click(function (e) {
    isClicked =true;
    if (isClicked) {
        $('h1,p').addClass('back-color');
    } else {
        $('h1,p').removeClass('back-color');
    } 
    isClicked=false;   
});


