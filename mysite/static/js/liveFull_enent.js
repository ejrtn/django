$(function(){
    // 영상 가져오기
    live_src(live_user)
    

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

    // 소리 크기 조절 ui 보이기
    document.querySelector('.live_sound').addEventListener('click',function(){
        if(document.querySelector('.live_sound_ui').style.display==='' || document.querySelector('.live_sound_ui').style.display==='none'){
            document.querySelector('.live_sound_ui').style.display='inline'
        }else{
            document.querySelector('.live_sound_ui').style.display='none'
        }
    })

    // 소리 크기 조절 관련 이벤트 처리
    document.querySelector('.live_sound_ui').addEventListener('input',e=>{
        console.log(e.target.value)
    });

    // 전체화면 취소
    document.querySelector(".live_zise").addEventListener('click',()=>{location.href='/'+live_user+'/live'})
})
