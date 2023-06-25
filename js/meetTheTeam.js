$(document).ready(function(){
    $('.ReadBtn').click(function(){
let btn = this
let para = $(this).parent().parent().children()[3]
let paraText = $(para).text()
let paraDot = $(para).children()[0]
let paraExtra = $(para).children()[1]
let paraExtraText = $(paraExtra).text()
$(this).toggleClass('showText')

if ($(this).hasClass('showText')) {
    $(paraDot).hide()
    $(paraExtra).show(400)
    $(this).text('Read Less')
}else{
    $(paraExtra).hide(500)
    $(paraDot).show(400)
    $(this).text('Read More')
}
    })
})