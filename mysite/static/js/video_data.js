/**
 * 카테고리 id값을 가지고 동영상 목록 가져오기
 * @param {String} href 페이지 경로 
 * @param {String} data 데이터(검색 값)
 * @param {String} category_name 카테고리 이름 - main 페이지에서만 사용, 다른페이지에서 활용시 null 입력
 * @param {String} type 검색 컬럼명
 * @param {BigInt} num[] 2개의 값으로 이뤄진 배열을 받음, ['시작번호','갯수'] ex) 0번부터 5개 이면 [0,5] , 5번부터 10개이면 [5,10]
 */
function video_list(href,data,category_name,type,num){
    $.ajax({
        type: "POST",
        url: "/videoList/",
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','data':data,'type':type,'numStart[]':num},
        success: function (data) {
            if(href==='/') main_ui(data['result'],category_name,data['add_tf']);
            if(href==='/edit') {
                document.querySelector('tbody').innerHTML=''; 
                edit_ui(data['result'],data['category'],data['add_tf']);
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}


/**
 * 동영상 저장
 * @param {File} file_thumbnail 썸네일 파일
 * @param {File} file_video     동영상 파일
 */
function video_save(file_thumbnail,file_video){
    let formData = new FormData();
    formData.append('X-CSRFTOKEN','{{ csrf_token }}')
    formData.append('category',document.getElementsByClassName('category')[0].selectedOptions[0].id)
    formData.append('title',document.getElementsByClassName('video_title')[0].value)
    formData.append('content',document.getElementsByClassName('content')[0].textContent)
    formData.append('thumbnail',file_thumbnail)
    formData.append('video',file_video)

    $.ajax({
        type: "POST",
        url: "/videoSave/",
        data: formData,
        enctype: "multipart/form-data", //form data 설정
        processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식합니다
        contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식합니다
        success: function (data) {
            if(data['result']=='success'){
                document.querySelector('tbody').innerHTML=''
                document.getElementsByClassName('modal')[0].style.display='none'
                search_config_reset()
                video_list('/edit',search_data,null,search_type,[data_next,limit])
            }
            alert(data['result'])
        },
        error: function (error) {
            console.log(error)
        }
    })
}


/**
 * @param {BigInt} id 동영상 id값
 */
function video_del(id){
    $.ajax({
        type: "POST",
        url: "/videoDel/",
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','id':id},
        success: function (data) {
            if(data['result']==='success') {
                search_config_reset()
                video_list('/edit',search_data,null,search_type,[data_next,limit]);
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}