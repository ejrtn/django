
$(function(){
    video_list('/',parseInt(document.querySelectorAll('.category label')[0].htmlFor),document.querySelectorAll('.category label')[0].textContent,'category',[0,20])
    document.querySelector('.category').addEventListener('click',function(e){
        if(typeof(e.target.htmlFor) !== 'undefined'){
            document.getElementsByClassName('video_list')[0].innerHTML=''
            video_list('/',parseInt(e.target.htmlFor),e.target.textContent,'category',[0,limit])
        }
    })
})