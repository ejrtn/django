$(function () {
    // login button click event
    document.getElementsByClassName('login')[0].addEventListener('click', function () {
        const id = document.getElementsByName('id')[0].value
        const pw = document.getElementsByName('pw')[0].value
        loginCheck(id,pw)
    })

    document.getElementsByClassName('join')[0].addEventListener('click',function(){
        location.href='/user/join'
    })
})