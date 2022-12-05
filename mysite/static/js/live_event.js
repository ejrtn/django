let clickKeyCode = {'enter':0,'shift':0}
$(function(){
    document.querySelector('.chatting_in').addEventListener('keydown',function(event){
        if(event.keyCode === 13){
            clickKeyCode['enter'] = 1
        }
        if(event.keyCode === 16){
            clickKeyCode['shift'] = 1
            console.log(clickKeyCode['shift'])
        }
        if(clickKeyCode['enter']==1 && clickKeyCode['shift']==0){
            text = document.querySelector('.chatting_in').value
            if(text.replaceAll("\n","").replaceAll(" ","") !== ""){
                document.querySelector('.chatting_out').value += "\r\n" + sub_name + " : " + text
            }
            
        }
    })

    document.querySelector('.chatting_in').addEventListener('keyup',function(event){
        if(event.keyCode == 13){
            clickKeyCode['enter'] = 0
            if(clickKeyCode['enter'] === 0 && clickKeyCode['shift'] === 0){
                document.querySelector('.chatting_in').value = ''
            }
        }
        if(event.keyCode === 16){
            clickKeyCode['shift'] = 0
        }
        
    })

    document.querySelector('.user_icon').addEventListener('click',function(){
        document.querySelector('.modal_ui').innerHTML = modal_content_ui()
            document.querySelector('.modal').classList.add("display_inline")
    })
})