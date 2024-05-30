// console.log($);

function restart(){
    $.get('/todo',(data)=>{
        console.log(data);
        $('#list').empty();
        for (let i of data) {
            $('#list').append(`<li>${i}</li>`)
        }

    })
}
restart();

$('button').on('click',()=>{
    let data = $('input').val()
    console.log(data,"dtatat");
    
    $.post('/todo',{data} ,(res)=>{
        console.log(res,"ghjjgj");
        $('input').val('');
        restart();
    })
})
