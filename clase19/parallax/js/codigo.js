/* The above code is using jQuery to select the div with the class background and then using the scroll
function to change the background position of the div. */
$(document).ready(function(){
    $window = $(window);
    $('#intro').height($window.height())
    $window.scroll(function(){
        $('div.background').each(function(index,item){
            let $scroll = $(item);
            let yPos = -($window.scrollTop()/$scroll.data('speed'))
            let coords = '50% '+ yPos+ 'px';
            $scroll.css ({backgroundPosition: coords})
        })
    })
})