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
        write_page_source(document.innerHTML,(link)=>{
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