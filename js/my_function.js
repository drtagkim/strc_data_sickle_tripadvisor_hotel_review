function clearMemory(objURL) {
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
}
function write_page_source(data,callback) {
    var blob=new Blob([data],{type:'text/plain'}); //텍스트 파일로 설정
    var objURL=window.URL.createObjectURL(blob); //URL을 비운다.
    clearMemory(objURL); //메모리 클리어
    var a = document.createElement('a');
    a.href = objURL;
    callback(a);
    //a.download="sample_download.html";
    //a.click();
}
function run() {
    let element_more=document.querySelector('span[class*="location-review-review-list-parts-ExpandableReview__cta"]');
    let WAIT_MORE=1000;
    element_more.click();
    setTimeout(function(){
        write_page_source(document.body.innerHTML,(link)=>{
            let file_date=new Date();
            file_date=file_date.toGMTString();
            link.download="tripadvisor_hotel_reivew_("+file_date+").html";
            link.click();
        });
    },WAIT_MORE);
}
function run_continue() {
    let element_more=document.querySelector('span[class*="location-review-review-list-parts-ExpandableReview__cta"]');
    let element_next=document.querySelector('a[class*="nav next primary"]');
    let WAIT=1000;
    if(element_next != null) {
        setTimeout(function(){
            element_next.click();
        },WAIT*1);
        setTimeout(function(){
            element_more.click();
        },WAIT*2);
        //issue here.
        setTimeout(function(){
            write_page_source(document.innerHTML,(link)=>{
                let file_date=new Date();
                file_date=file_date.toGMTString();
                link.download="tripadvisor_hotel_reivew_("+file_date+").html";
                link.click();
            });
        },WAIT*3);
    }
}
function get_page_num() {
    let current_page=document.querySelector('span[class*="pageNum current"]') //현재 페이지
    let pages=document.querySelectorAll('a[class^="pageNum"')
    let end_page=parseInt(pages[pages.length-1].innerText);
    let current_page_no;
    let return_msg;
    if(current_page != null) { //존재하면
        current_page_no=parseInt(current_page.innerText);
    } else {
        return "Tripadvisor hotel reviews required";
    }
    if(current_page_no>=end_page) {
        return_msg="Complete";
    } else {
        return_msg="In progress... "+current_page_no+"/"+end_page;
    }
    return return_msg;
}