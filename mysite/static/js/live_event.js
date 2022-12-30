let clickKeyCode = {'enter':0,'shift':0}
let live_list_scroll_check = true
$(function(){
    filter(el = document.querySelector(".fiter-icon").title,0)
    live_src(live_user)

    // 채팅 입력
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

    // 채팅입력
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

    // 채팅창 열기.닫기 아이콘
    document.querySelector(".chatting-icon").addEventListener('click',function(){
        if(document.getElementsByClassName('live_chatting')[0].style.display != 'none'){
            document.getElementsByClassName('live_chatting')[0].style.display = 'none'
            document.documentElement.style.setProperty('--chatting-icon','white')
        }else{
            document.getElementsByClassName('live_chatting')[0].style.display = 'inline'
            document.documentElement.style.setProperty('--chatting-icon','yellow')
        }
    })

    // 목록 열기.닫기 아이콘
    document.querySelector(".list-icon").addEventListener('click',function(){
        if(document.getElementsByClassName('live_list')[0].style.display != 'none'){
            document.getElementsByClassName('live_list')[0].style.display = 'none'
            document.documentElement.style.setProperty('--list-icon','white')
        }else{
            document.getElementsByClassName('live_list')[0].style.display = 'inline'
            document.documentElement.style.setProperty('--list-icon','yellow')
        }
    })
    
    // 즐겨찾기 열기.닫기 아이콘
    document.querySelector(".star-icon").addEventListener('click',function(){
        if(document.getElementsByClassName('star_list')[0].style.display != 'none'){
            document.getElementsByClassName('star_list')[0].style.display = 'none'
            document.documentElement.style.setProperty('--star-icon','white')
        }else{
            document.getElementsByClassName('star_list')[0].style.display = 'inline'
            document.documentElement.style.setProperty('--star-icon','yellow')
        }
    })

    // 사용자 아이콘 클릭
    document.querySelector('.user_icon').addEventListener('click',function(){
        document.querySelector('.modal_ui').innerHTML = sub_name_update_modal_ui()
        document.querySelector('.modal').classList.add("display_inline")
    })

    // 목록 새로고침 아이콘
    document.querySelector(".refresh-icon").addEventListener("click",function(){
        document.querySelector(".live-content").title = 0
        filter(el = document.querySelector(".fiter-icon").title,0)
    })
    // 목록 추가(스크롤 이벤트)
    document.querySelector(".live-content").addEventListener('scroll',function(){
        if(parseInt(this.scrollHeight - this.scrollTop) < this.clientHeight + 50){
            if(live_list_scroll_check && document.querySelector(".live-content").title%5===0){
                live_list_scroll_check = false
                filter(el = document.querySelector(".fiter-icon").title,document.querySelector(".live-content").title)
            }
        }
    })

    // 필터 목록 보이기.숨기기 아이콘
    document.querySelector(".fiter-icon").addEventListener('click',function(e){
        if(document.querySelectorAll('.fiter-icon div')[4].style.display === '' || document.querySelectorAll('.fiter-icon div')[4].style.display === 'none'){
            document.querySelectorAll('.fiter-icon div')[4].style.display = 'flex'
        }else{
            document.querySelectorAll('.fiter-icon div')[4].style.display = 'none'
            
            if(e.target.nodeName=='SPAN'){
                let el = this.querySelectorAll('span')
                for(let i=0; i<el.length; i++){
                    el[i].classList.remove("background-color-9c27b0")
                }
                e.target.classList.add("background-color-9c27b0")
                this.title = e.target.title
            }
        }
    })
    
    

    // 즐겨찾기 추가 아이콘
    document.querySelector(".star-add-icon").addEventListener("click",function(){

    })
    
    // 소리 크기 조절 ui 보이기
    document.querySelector('.live_sound').addEventListener('click',function(){
        if(document.querySelector('.live_sound_ui').style.display==='' || document.querySelector('.live_sound_ui').style.display==='none'){
            document.querySelector('.live_sound_ui').style.display='inline'
        }else{
            document.querySelector('.live_sound_ui').style.display='none'
        }
    })
})


$(function(){
    // 영상 동작.정지
    document.querySelector(".run").addEventListener('click',function(){
        if(document.querySelector("video").paused){
            document.querySelector("video").play()
            document.querySelector(".run").src = '/static/images/pause.png'
        }else{
            document.querySelector("video").pause()
            document.querySelector(".run").src = '/static/images/run.png'
        }
    })

    // 소리 크기 조절 이벤트 처리
    document.querySelector('.live_sound_ui').addEventListener('input',e=>{
        console.log(e.target.value)
    });

    // 전체화면
    document.querySelector(".live_zise").addEventListener('click',()=>{location.href='/'+live_user+'/liveFull'})
})

