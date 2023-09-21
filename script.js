$(function(){

    var taskTitle
    var taskText
    
    function takeData(){
        taskTitle = $('#new-task-title').val();
        taskText = $('#new-task-text').val();
    }

    function createField(){
        $('#task-list-box').append('<div class = task-list-container>');
        $('.task-list-container').last().append('<div class = "title">');
        $('.task-list-container .title').last().append(taskTitle);
        $('.task-list-container .title').last().append('<img class = "cross" src = "img/cross.png">');
        $('.task-list-container .title').last().append('<img class = "arrow" src = "img/arrow.png">');
        $('.task-list-container').last().append('<div class = text>');
        $('.task-list-container .text').last().append(taskText);
    }


  
    
    $('#add-task').click(function(){
        $('#empty-list').remove();
        takeData();
        createField();

        $('.cross').click(function(){
            $(this).parent().parent().remove(); 
            if ($('#task-list-box').html().trim() === ''){
                $('#task-list-box').append('<div id = empty-list>Список пуст...</div>');
            }
        });

    }); 

  


});