function live_list_ui(data){
    if (parseInt(document.querySelector(".live-content").title) === 0){
        document.querySelector(".live-content").innerHTML = ''
    }
    for(let i=0;i<data.length;i++){

        t = '<div title="'+data[i]['user_id']+'">'
        t +=    '<video src="'+data[i]['src']+'"></video>'
        t +=    '<span>'+data[i]['title']+'</span>'
        t +='</div>'
        document.querySelector(".live-content").innerHTML += t
    }
    document.querySelector(".live-content").title = parseInt(document.querySelector(".live-content").title)+data.length
    live_list_scroll_check = true
}

function live_src_ui(src){
    const videoEl = document.querySelector('.live_video video');
    videoEl.src=src
    videoEl.play();
}