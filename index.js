function init(){
    viewAllExample();    
}

function viewAllExample(){
    $.each(listExample,function(index, example){
        exampleElement = $( "#sample" ).clone();
        exampleElement.find('a').attr('href', example + '//' + example + '.html').text(example);
        exampleElement.attr('id', example).show();
        exampleElement.appendTo( "#mainView" );
    });
}

$( document ).ready(function(){
    init();
});

