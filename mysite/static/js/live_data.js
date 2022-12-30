
/**
 * 
 * @param {String} sub_name_new 새로운 별칭
 */
function subNameUpdate(sub_name_new){
    $.ajax({
        type: "POST",
        url: "/user/subNameUpdate/",
        dataType: 'json',
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','sub_name_new':sub_name_new,'sub_name_ing':sub_name},
        success: function (data) {
            document.querySelector(".modal").classList.remove("display_inline")
        },
        error: function (error) {
            console.log(error)
        }
    })
}

/**
 * 
 * @param {int} videoCategory 
 */
function filter(videoCategory,live_start_num){
    $.ajax({
        type: "POST",
        url: "/liveList",
        dataType: 'json',
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','videoCategory':videoCategory,'start':live_start_num},
        success: function (data) {
            live_list_ui(data['result'])
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function live_src(user_id){
    $.ajax({
        type: "POST",
        url: "/liveUserSrc",
        dataType: 'json',
        data: {'X-CSRFTOKEN':'{{ csrf_token }}','user_id':user_id},
        success: function (data) {
            live_src_ui(data['result'])
        },
        error: function (error) {
            console.log(error)
        }
    })
}

