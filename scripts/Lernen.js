$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
     
    $('#Albanisch-button').click(function () {
    if($('#Albanisch').hasClass('hidden')) {
        $('#Albanisch').removeClass('hidden')
    }
    else {
    $('#Albanisch').addClass('hidden');
    }
         
    });
     
    $('#Deutsch-button').click(function () {
    if($('#Deutsch').hasClass('hidden')) {
        $('#Deutsch').removeClass('hidden')
    }
    else {
    $('#Deutsch').addClass('hidden');
    }
         
    });
     
});