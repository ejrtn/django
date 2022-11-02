$(function(){
    document.querySelector('.live_chatting .chatting_in').addEventListener('keydown',function(event){
        if(event.keyCode ==13){
            if(!event.shiftKey){
                text = document.querySelector('.live_chatting .chatting_in').value
                document.querySelector('.live_chatting .chatting_out').value += text
                document.querySelector('.live_chatting .chatting_in').value = ''
            }
        }
    })

    subName(id)
})