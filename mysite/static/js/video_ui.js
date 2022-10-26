function main_ui(data,category_name,add_tf) {
    let t = ''
    for(let i=0;i<data.length;i++){
        if(i%5==0){
            t += '<div class="plays">'
        }
        t += '<div class="play"><video muted loop class="vid" >'
        t += '<source src="/media/'+data[i]['url_small']+'">'
        t += '<strong>Your browser does not support the video tag.</strong>'
        t += '</video>'
        if(data[i]['thumbnail_small'] != '') {t += '<img src="/media/'+data[i]['thumbnail_small']+'">'}
        t += '<div class="progress background_color_0"><div></div></div></div>'
        if(i%5==4){
            t += '</div>'
        }
    }
    
    if(data.length==0) {
        t = '<h3>'+category_name+' 카테고리에 해당하는 데이터 없음</h3>';
        document.querySelector('.data_add').classList.add('display_none')
        document.getElementsByClassName('video_list')[0].innerHTML = t
    }else{
        document.getElementsByClassName('video_list')[0].innerHTML+=t
    }
    video_mouseover()
    video_mouseout()
    video_timeupdate()

    // 다음값(add_tf)이 있으면(True) '더보기' 보임
    // 다음값(add_tf)이 없으면(False) '더보기' 안보임
    if(add_tf) document.querySelector('.data_add').classList.remove('display_none');
    else document.querySelector('.data_add').classList.add('display_none');
}

function edit_ui(data,category,add_tf){
    let t = ''
    for(let i=0;i<data.length;i++){
        t += '<tr>'
        if(data[i]['thumbnail_small'] != ''){
            t += '<td><img src="/media/'+data[i]['thumbnail_small']+'"></td>'
        }else{
            t += '<td>없음</td>'
        }
        for(let c=0;c<category.length;c++){
            if(category[c]['id']===data[i]['videoCategory_id']){
                t += '<td>'+category[c]['name']+'</td>'
            }
        }
        t += '<td>'+data[i]['title']+'</td>'
        t += '<td>'+data[i]['url_small']+'</td>'
        t += '<td><img src="/static/images/del.png" class="del" alt="'+data[i]['id']+'"></td>'
        t += '</tr>'
    }
    if(data.length==0) {
        t = '<tr><td colspan="5"><h3>데이터 없음</h3></td><tr>'
        document.querySelector('.data_add').parentElement.classList.add('display_none')
    }

    document.querySelector('tbody').innerHTML+=t
    
    // 다음값(add_tf)이 있으면(True) '더보기' 보임
    // 다음값(add_tf)이 없으면(False) '더보기' 안보임
    if(add_tf) document.querySelector('.data_add').parentElement.classList.remove('display_none');
    else document.querySelector('.data_add').parentElement.classList.add('display_none');
}