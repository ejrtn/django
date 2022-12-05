/**
 * 
 * @param {String} sub_name_new 현재 subname 
 */
function subNameUpdate(sub_name_new){
    $.ajax({
        type: "POST",
        url: "/user/subNameUpdate/",
        dataType: 'json',
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','sub_name_new':sub_name_new,'sub_name_ing':sub_name},
        success: function (data) {
            sub_name=data['result']
        },
        error: function (error) {
            console.log(error)
        }
    })
}