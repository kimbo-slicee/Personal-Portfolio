const initServices=()=>{
const serviceCardWithModals=document.querySelectorAll(".service-container .card-with-modal");
serviceCardWithModals.forEach((serviceCardWithModal)=>{
const serviceCard=serviceCardWithModal.querySelector(".service-card");
const serviceBackDrop=serviceCardWithModal.querySelector(".service-modal-backdrop");
const serviceModel=serviceCardWithModal.querySelector(".service-modal");
const modalCloseBtn=serviceCardWithModal.querySelector(".modal-close-btn");
serviceCard.addEventListener("click",()=>{
    serviceBackDrop.style.display="flex";
    setTimeout(()=>{
        serviceBackDrop.classList.add("active")
    },100)
    setTimeout(()=>{
        serviceModel.classList.add("active")
    },300)
})
modalCloseBtn.addEventListener("click",()=>{
    setTimeout(()=>{
    serviceBackDrop.style.display="none";
    },500)
    setTimeout(()=>{
    serviceBackDrop.classList.remove("active");
    serviceModel.classList.remove("active")
    },100)
})
})
}
export default initServices;
