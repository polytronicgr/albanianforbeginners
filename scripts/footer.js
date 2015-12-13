$(function(){
    var mainB = document.getElementById('main').getBoundingClientRect().bottom;
    var viewB = screen.height;

    var footer = $("footer");
    console.log(footer);

    if(mainB > viewB){
        footer.css('position', 'relative')
    }else{
        footer.css('position', 'fixed')
    }
})
