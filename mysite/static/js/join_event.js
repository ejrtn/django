$(function(){
    document.getElementsByClassName('join_ok')[0].addEventListener('click',function(){
        console.log('join_ok')
        el = document.querySelectorAll('input')
        if(el[0].value!='' && el[1].value!='' && el[2].value!='' && el[3].value!='' && el[4].value!='' && el[5].value!=''){
            
            obj = {
                name:el[0].value,
                sub_name:el[1].value,
                id:el[2].value,
                pw:el[3].value,
                phon:el[4].value,
                email:el[5].value
            }
            userSave(obj)
        }else{
            alert('비어있는 칸이 있습니다')
        }
    })
})