/*
content1.js
*/

//
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
    let WAIT_MORE=2000;
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
/*
Execution code
*/
//1.click more
//2.download data
//3.if download is completed (see background.js)
run();