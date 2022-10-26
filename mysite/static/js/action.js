/**
 * file upload를 하기 위해
 * file선택 창을 직접 클릭을 통한 선택 또는 드래그&드롭을 통한 선택을 확인하기 위해
 * 공통 변수 생성
 * file_thumbnail : 썸네일 파일
 * file_video : 동영상 파일
 */
let file_thumbnail = null
let file_video = null

/**
 * 데이터 가져오는 갯수
 */
let limit = 20

/**
 * 데이터 시작 위치
 */
let data_next = 0

/**
 * 검색 값 및 타입
 */
let search_data = ''    // 검색 값
let search_type = 'all' // 검색 타입

function search_config_reset(){
    limit = 20
    data_next = 0
    search_data = ''
    search_type = 'all'
}

/**
 * video mouseover event
 * 영상 위치에 마우스를 올렸을 때 
 * 해당 영상 재생(반복) 되도록 실행
 * 
 * 썸네일 img 태그 여부에 따라 동작 코드가 다름
 * 
 */
function video_mouseover(){
    el = document.querySelectorAll('.play')
    for(let i=0;i<el.length;i++){
        if(el[i].querySelector('img')===null){      // 썸네일 img 태그 여부
            el[i].querySelector('.vid').addEventListener('mouseover',function(e){
                e.target.play();
                e.target.nextSibling.style.opacity= 1;
            })
        }else{
            el[i].querySelector('img').addEventListener('mouseover',function(e){
                e.target.style.display='none'
                e.target.previousSibling.play();
                e.target.previousSibling.parentNode.lastChild.style.opacity= 1;
            })
        }
    }
}
/**
 * video mouseout event
 * 영상에 마우스를 올리지 않았을 때
 * 해당 영상 동작 안됨
 * 
 * 썸네일 img 태그 여부에 따라 동작 코드가 다름
 */
function video_mouseout(){
    el = document.querySelectorAll('.play')
    for(let i=0;i<el.length;i++){
        if(el[i].querySelector('img')===null){      // 썸네일 img 태그 여부
            el[i].querySelector('.vid').addEventListener('mouseout',function(e){
                e.target.pause()
                e.target.nextSibling.style.opacity = 0;
            })
        }else{
            el[i].querySelector('.vid').addEventListener('mouseout',function(e){
                e.target.pause()
                e.target.nextSibling.nextSibling.style.opacity = 0;
                e.target.nextSibling.style.display='block'
            })
        }
        
    }
}
/**
 * video timeupdate event
 * 영상 재생 하는동안 영상 밑에 진행되는 바(색 : 빨강) 보여짐
 */
function video_timeupdate(){
    el = document.querySelectorAll('.vid')
    for(let i=0;i<el.length;i++){
        el[i].addEventListener('timeupdate',function(e){
            bar = e.target.currentTime / e.target.duration * 100
            e.target.parentNode.lastChild.lastChild.style.width=bar+'%'
        })
    }
}

/**
 * 드래그한 파일이 이미지 파일인지 확인 여부
 * indexOf 결과 true = 0 , flase = -1
 */
function drag_image_check(data){
    //파일인지 유효성 검사
	if(data.types.indexOf('Files') < 0){
        return false;
    }
    
    if(data.files[0].type.indexOf('image') < 0){
		alert('이미지 파일만 업로드 가능합니다.');
		return false;
	}

    //파일의 개수는 1개씩만 가능하도록 유효성 검사
	if(data.files.length > 1){
		alert('파일은 하나씩 전송이 가능합니다.');
		return false;
	}

    return true;
}

/**
 * 드래그한 파일이 동영상 파일인지 확인 여부
 * indexOf 결과 true = 0 , flase = -1
 */
function drag_video_check(data){
    //파일인지 유효성 검사
    if(data.types.indexOf('Files') < 0){
        return false;
    }

    if(data.files[0].type.indexOf('video') < 0){
    alert('동영상 파일만 업로드 가능합니다.');
        return false;
    }

    //파일의 개수는 1개씩만 가능하도록 유효성 검사
    if(data.files.length > 1){
        alert('파일은 하나씩 전송이 가능합니다.');
        return false;
    }

    return true;

}

$(function(){
    if(window.location.href.includes('edit')){
        video_list('/edit','',null,'all',[data_next,limit])
        document.getElementsByClassName('search_btn')[0].addEventListener('click',function(){
            search_type = document.getElementsByClassName('search_type')[0].value
            let data = document.querySelector('.search input').value
            if(search_type==='category') { 
                data = document.getElementsByClassName('search_category')[0].children[document.getElementsByClassName('search_category')[0].selectedIndex].id
            }
            search_data = data
            video_list('/edit',search_data,null,search_type,[data_next,limit])
        })
        document.querySelector('tbody').addEventListener('click',function(e){
            if(e.target.className==='del'){
                video_del(e.target.alt)
            }
        })
        document.getElementsByClassName('search_type')[0].addEventListener('change',function(e){
            if(e.target.value==='category'){
                document.querySelector('.search input').style.display='none'
                document.getElementsByClassName('search_category')[0].style.display='block'
            }else{
                document.querySelector('.search input').style.display='block'
                document.getElementsByClassName('search_category')[0].style.display='none'
            }
        })
    }
})


$(function(){
    if(window.location.href.includes('edit')){
        /**
         * 영상 추가 하기 위한 modal 창 열기 버튼 이벤트
         */
        document.getElementsByClassName('add')[0].addEventListener('click',function(){
            document.getElementsByClassName('modal')[0].style.display='block'
        })
        
        /**
         * 영상 추가 하기 위한 modal 창 닫기 버튼 이벤트
         */
        document.getElementsByClassName('model_close')[0].addEventListener('click',function(){
            document.getElementsByClassName('modal')[0].style.display='none'
        })

        /**
         * 동영상 파일선택
         */
        document.getElementsByClassName('div_video')[0].addEventListener('dblclick',function(){
            document.getElementById('file_video').click()
        })

        /**
         * 썸네일 파일선택
         */
        document.getElementsByClassName('div_thumbnail')[0].addEventListener('dblclick',function(){
            document.getElementById('file_thumbnail').click()
        })

        /**
         * 동영상 파일 선택 시 동작
         */
        document.getElementById('file_video').addEventListener('change',function(e){
            file_video = e.target.files[0]          // ajax로 form형식으로 넘기기 위한 변수 담기
            const src = URL.createObjectURL(e.target.files[0]);
            t = '<video muted class="modal_video" style="display: block">'
            t += '<source src="'+src+'" type="'+e.target.files[0].type+'">'
            t += '<strong>Your browser does not support the video tag.</strong>'
            t += '</video>'
            const el = e.target.parentNode
            el.firstElementChild.remove()
            console.log(el)
            el.innerHTML=t+el.innerHTML;
            document.querySelectorAll('.file_video')[0].style.display='none'
            document.querySelectorAll('.file_video')[1].style.display='none'
            document.querySelector('.modal_video').style.display='block'
            document.querySelector('.div_video').classList.add('border_0')
            
            document.getElementById('file_video').addEventListener('change',function(e){
                file_video = e.target.files[0]          // ajax로 form형식으로 넘기기 위한 변수 담기
                const src = URL.createObjectURL(e.target.files[0]);
                t = '<video muted class="modal_video" style="display: block">'
                t += '<source src="'+src+'" type="'+e.target.files[0].type+'">'
                t += '<strong>Your browser does not support the video tag.</strong>'
                t += '</video>'
                const el = e.target.parentNode
                el.firstElementChild.remove()
                el.innerHTML=t+el.innerHTML;
                document.querySelectorAll('.file_video')[0].style.display='none'
                document.querySelectorAll('.file_video')[1].style.display='none'
                document.querySelector('.modal_video').style.display='block'
                document.querySelector('.div_video').classList.add('border_0')
               
            })
        })

        /**
         * 썸네일 파일 선택 시 동작
         */
        document.getElementById('file_thumbnail').addEventListener('change',function(e){
            file_thumbnail = e.target.files[0]          // ajax로 form형식으로 넘기기 위한 변수 담기
            const src = URL.createObjectURL(e.target.files[0]);
            document.querySelector('.modal_thumbnail').src=src
            document.querySelectorAll('.file_thumbnail')[0].style.display='none'
            document.querySelectorAll('.file_thumbnail')[1].style.display='none'
            document.querySelector('.modal_thumbnail').style.display='block'
            document.querySelector('.div_thumbnail').classList.add('border_0')
        })

        /**
         * 동영상 업로드 박스안에 drag 들어 왔을 때
         */
        document.getElementsByClassName('div_video')[0].addEventListener('dragenter',function(e){
            e.preventDefault();
            document.getElementsByClassName('modal_video')[0].classList.add('border_2px_solid_red')
            document.getElementsByClassName('div_video')[0].classList.add('border_color_red')
            if(e.dataTransfer.types[0].indexOf('Files') < 0){
                document.getElementsByClassName('file_video')[0].textContent='선택한 것은 파일이 아닙니다'
            }
        })

        /**
         * 동영상 업로드 박스안에 drag시 파일 복사 방지
         */
        document.getElementsByClassName('div_video')[0].addEventListener('dragover',function(e){
            e.preventDefault();
            document.getElementsByClassName('modal_video')[0].classList.add('border_2px_solid_red')
            document.getElementsByClassName('div_video')[0].classList.add('border_color_red')
            if(e.dataTransfer.types[0].indexOf('Files') < 0){
                document.getElementsByClassName('file_video')[0].textContent='선택한 것은 파일이 아닙니다'
            }
        })

        /**
         * 동영상 업로드 박스안에 drag 나갔을 때
         */
        document.getElementsByClassName('div_video')[0].addEventListener('dragleave', function(e) {
            document.getElementsByClassName('modal_video')[0].classList.remove('border_2px_solid_red')
            document.getElementsByClassName('div_video')[0].classList.remove('border_color_red')
        });

        /**
         * 동영상 업로드 박스안에 drag를 drop 했을 때
         */
        document.getElementsByClassName('div_video')[0].addEventListener('drop',function(e){
            e.preventDefault();
            if(drag_video_check(e.dataTransfer)){
                file_video = e.dataTransfer.files[0]            // ajax로 form형식으로 넘기기 위한 변수 담기
                const src = URL.createObjectURL(e.dataTransfer.files[0]);
                t = '<video muted class="modal_video" style="display: block">'
                t += '<source src="'+src+'" type="'+e.dataTransfer.files[0].type+'">'
                t += '<strong>Your browser does not support the video tag.</strong>'
                t += '</video>'
                const el = document.getElementsByClassName('div_video')[0]
                el.firstElementChild.remove()
                el.innerHTML=t+el.innerHTML;
                document.querySelectorAll('.file_video')[0].style.display='none'
                document.querySelectorAll('.file_video')[1].style.display='none'
                document.querySelector('.modal_video').style.display='block'
                document.querySelector('.div_video').classList.add('border_0')
                document.getElementsByClassName('modal_video')[0].classList.remove('border_2px_solid_red')
                document.getElementsByClassName('div_video')[0].classList.remove('border_color_red')
                
                document.getElementsByClassName('div_video')[0].addEventListener('drop',function(e){
                    e.preventDefault();
                    if(drag_video_check(e.dataTransfer)){
                        file_video = e.dataTransfer.files[0]            // ajax로 form형식으로 넘기기 위한 변수 담기
                        const src = URL.createObjectURL(e.dataTransfer.files[0]);
                        t = '<video muted class="modal_video" style="display: block">'
                        t += '<source src="'+src+'" type="'+e.dataTransfer.files[0].type+'">'
                        t += '<strong>Your browser does not support the video tag.</strong>'
                        t += '</video>'
                        const el = document.getElementsByClassName('div_video')[0]
                        el.firstElementChild.remove()
                        el.innerHTML=t+el.innerHTML;
                        document.querySelectorAll('.file_video')[0].style.display='none'
                        document.querySelectorAll('.file_video')[1].style.display='none'
                        document.querySelector('.modal_video').style.display='block'
                        document.querySelector('.div_video').classList.add('border_0')
                        document.getElementsByClassName('modal_video')[0].classList.remove('border_2px_solid_red')
                        document.getElementsByClassName('div_video')[0].classList.remove('border_color_red')
                    }
                })
            }
        })

        
        /**
         * 동영상 업로드 박스안에 drag 들어 왔을 때
         */
        document.getElementsByClassName('div_thumbnail')[0].addEventListener('dragenter',function(e){
            e.preventDefault();
            document.getElementsByClassName('modal_thumbnail')[0].classList.add('border_2px_solid_red')
            document.getElementsByClassName('div_thumbnail')[0].classList.add('border_color_red')
            if(e.dataTransfer.types[0].indexOf('Files') < 0){
                document.getElementsByClassName('file_thumbnail')[0].textContent='선택한 것은 파일이 아닙니다'   
            }
        })

        /**
         * 동영상 업로드 박스안에 drag시 파일 복사 방지
         */
        document.getElementsByClassName('div_thumbnail')[0].addEventListener('dragover',function(e){
            e.preventDefault();
            document.getElementsByClassName('modal_thumbnail')[0].classList.add('border_2px_solid_red')
            document.getElementsByClassName('div_thumbnail')[0].classList.add('border_color_red')
            if(e.dataTransfer.types[0].indexOf('Files') < 0){
                document.getElementsByClassName('file_thumbnail')[0].textContent='선택한 것은 파일이 아닙니다'   
            }
        })

        /**
         * 동영상 업로드 박스안에 drag 나갔을 때
         */
        document.getElementsByClassName('div_thumbnail')[0].addEventListener('dragleave', function(e) {
            document.getElementsByClassName('modal_thumbnail')[0] .classList.remove('border_2px_solid_red')
            document.getElementsByClassName('div_thumbnail')[0] .classList.remove('border_color_red')
        });

        /**
         * 동영상 업로드 박스안에 drag를 drop 했을 때
         */
        document.getElementsByClassName('div_thumbnail')[0].addEventListener('drop',function(e){
            e.preventDefault();
            if(drag_image_check(e.dataTransfer)){
                file_thumbnail = e.dataTransfer.files[0]         // ajax로 form형식으로 넘기기 위한 변수 담기
                const src = URL.createObjectURL(e.dataTransfer.files[0]);
                document.querySelector('.modal_thumbnail').src=src
                document.querySelectorAll('.file_thumbnail')[0].style.display='none'
                document.querySelectorAll('.file_thumbnail')[1].style.display='none'
                document.querySelector('.modal_thumbnail').style.display='block'
                document.querySelector('.div_thumbnail').classList.add('border_0')
                document.getElementsByClassName('modal_thumbnail')[0] .classList.remove('border_2px_solid_red')
                document.getElementsByClassName('div_thumbnail')[0] .classList.remove('border_color_red')
            }
        })
    }
})

$(function(){
    if(window.location.href.includes('edit')){
        /**
         * 영상 등록 modal 확인 버튼
         */
        document.getElementsByClassName('modal_ok')[0].addEventListener('click',function(){
            if(document.getElementsByClassName('title')[0].value.replaceAll(/ /g,"")===''){
                alert('영상 제목 입력해주세요')
            }else if(document.getElementsByClassName('file_thumbnail')[0].style.display!='none'){
                s = confirm('썸네일 등록 여부')
                if(s){
                    alert('안함')
                    if(document.getElementsByClassName('file_video')[0].style.display!='none'){
                        alert('영상 선택 해주세요')
                    }else{
                        video_save(file_thumbnail,file_video)
                    }
                }else{
                    alert('함')
                }
            }else if(document.getElementsByClassName('file_video')[0].style.display!='none'){
                alert('영상 선택 해주세요')
            }else{
                video_save(file_thumbnail,file_video)
            }
        })

        /**
         * 데이터 추가
         */
        document.getElementsByClassName('data_add')[0].addEventListener('click',function(){
            data_next += 20
            video_list('/edit',search_data,null,search_type,[data_next,limit])
        })
    }
})