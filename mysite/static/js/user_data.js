$(function () {
    
    // login button click event
    document.getElementsByClassName('login')[0].addEventListener('click', function () {
        const id = document.getElementsByName('id')[0].value
        const pw = document.getElementsByName('pw')[0].value
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
    })



})