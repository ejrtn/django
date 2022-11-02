/**
 * 
 * @param {Object} obj  user 정보 
 */
function userSave(obj){
    obj['X-CSRFTOKEN'] = '{{ csrf_token }}'
    $.ajax({
        type: "POST",
        url: "/user/userSave/",
        dataType: 'json',
        data: obj,
        success: function (data) {
            if(data['result']=='id 존재'){
                alert('해당 ID는 이미 존재합니다')
            }else if(data['result']=='sub_name 존재'){
                alert('해당 닉네임은 미지 존재합니다.')
            }else{
                location.href = '/user/login'
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}