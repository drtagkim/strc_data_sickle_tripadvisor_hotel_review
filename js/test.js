function get_page_num() {
    let current_page=document.querySelector('span[class*="pageNum current"]') //현재 페이지
    let pages=document.querySelectorAll('a[class^="pageNum"')
    let end_page=parseInt(pages[pages.length-1].innerText);
    let current_page_no;
    let return_msg;
    if(current_page != null) { //존재하면
        current_page_no=parseInt(current_page.innerText);
    } else {
        return "Error";
    }
    if(current_page_no>=end_page) {
        return_msg="Complete";
    } else {
        return_msg="In progress... "+current_page_no+"/"+end_page;
    }
    return return_msg;
}
get_page_num();