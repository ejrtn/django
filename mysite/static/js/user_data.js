
/**
 * 
 * @param {String} id   id 
 * @param {String} pw   pw
 */
function loginCheck(id,pw){
    $.ajax({
        method: "POST",
        url: "/user/loginCheck/",
        dataType: 'json',
        data: JSON.stringify({ 'X-CSRFTOKEN': '{{ csrf_token }}', 'user_id': id ,'pw':pw}),
        success: function (data) {
            if(data.length===0){
                alert('입력 정보가 잘못 되었습니다')
            }else{
                location.href='/'
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}