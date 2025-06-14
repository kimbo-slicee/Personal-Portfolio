/*Add pagination functionality*/
const pagination = document.querySelectorAll('.pagination button');
pagination.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        const pageNumber= ele.parentElement.getAttribute("data-page");
        const currentPage=document.getElementById(pageNumber);
        // check if current page contain turn class that's mean's we click on previous btn if not we click on the
        // next btn
        if(currentPage.classList.contains("turn")){
                currentPage.classList.remove("turn");
                setTimeout(()=>{
                    currentPage.style.zIndex=String(20 - index);
                },500)
        }else{
                currentPage.classList.add("turn");
            setTimeout(()=>{
                currentPage.style.zIndex=String(20 + index);
            },500)
        }

    })
})
/*Handel ClickOn Contact Me*/
const contactMeBtn= document.querySelector(".contact-me");
const pages = document.querySelectorAll(".book-page.page-right");
contactMeBtn.addEventListener("click",()=>{
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add("turn");
            setTimeout(()=>{
                page.style.zIndex=String(20 + index);
            },500)
        },(index+1)*200+100);
    })
})

/*Handel Reverse index Function*/
let totalPages = pages.length;
let pageNumber =0;
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}
const backProfileBtn= document.querySelector(".profile-button");
backProfileBtn.addEventListener("click",()=>{
    pages.forEach((_,index)=>{
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(()=>{
                pages[pageNumber].style.zIndex=String(1000 - index);
            },500)
        },(index+1)*200+100);
    })
})
/*handel animation*/
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("animationend",()=>{
const rightCover= document.querySelector(".cover.cover-right")
    rightCover.classList.remove("turn");
    rightCover.style.zIndex="0";
    pages.forEach(((page,index)=>{
        setTimeout(()=>{
        page.classList.remove("turn");
        page.style.zIndex=String(1000 - index);
        },(index+1)*200+100);
    }));
});

