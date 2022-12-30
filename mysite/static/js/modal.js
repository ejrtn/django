function sub_name_update_modal_ui(){
    document.documentElement.style.setProperty('--modalHeight','300px')

    t = ""
    t += "<img src='/static/images/x.png' class='modal_close' id='modal_close'>"
    t += "<h1 class='modal_title'>별칭 수정</h1>"
    t += "<div class='modal_content'>"
    t +=    "<input type='input' class='modal_input' value='"+sub_name+"'>"
    t +=    "<button class='modal_ok'>확인</button>"
    t += "</div>"

    return t
}


$(function(){
    // modal창 닫기
    document.querySelector('.modal').addEventListener('click',function(e){
        if(e.target.className === 'modal_close'){
            e.target.parentNode.parentNode.classList.remove("display_inline")
        }
    })

    // modal창 확인
    document.querySelector('.modal').addEventListener('click',function(e){
        if(e.target.className === 'modal_ok'){
            let sub_name_new = document.querySelectorAll('.modal_input')[0].value
            subNameUpdate(sub_name_new)
        }
    })
})