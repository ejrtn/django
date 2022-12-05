$(function(){
    document.getElementsByClassName('join_ok')[0].addEventListener('click',function(){
        el = document.querySelectorAll('input')
        obj = {
            name:el[0].value,
            sub_name:el[1].value,
            id:el[2].value,
            pw:el[3].value,
            phon:el[4].value,
            email:el[5].value
        }
        userSave(obj)
    })

    document.querySelector('div').addEventListener('input',function(){
        let el = document.querySelectorAll('input')
        let ch = false
        for(let i=0;i<el.length;i++){
            if(el[i].value.replace(/ /g,"") === ''){
                ch = true
                break
            }
        }
        document.querySelector('.join_ok').disabled = ch
    })
    
    document.getElementsByName("phon")[0].addEventListener('change',function(){
        let check = /^[0-9]+$/;
        if(!check.test(this.value)){
            alert('숫자만 입력 가능합니다.')
            this.value  = ''
            this.focus()
        }
    })
})