/**
 * 
 * @param {String} id   id 
 */
function subName(id){
    $.ajax({
        type: "POST",
        url: "/user/subName/",
        dataType: 'json',
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','id':id},
        success: function (data) {
            sub_name=data['result']
        },
        error: function (error) {
            console.log(error)
        }
    })
}