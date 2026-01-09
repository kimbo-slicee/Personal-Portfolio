const resumeButtons=document.querySelectorAll(".resume-buttons button");
const resumeWrapper=document.querySelectorAll(".resume-wrapper");
console.log(resumeButtons, resumeWrapper);
resumeButtons.forEach((btn,index)=>{
    console.log(btn)
    btn.addEventListener("click",()=>{
        resumeButtons.forEach((btn)=>btn.classList.remove("active"));
        resumeWrapper.forEach((btn)=>btn.classList.remove("active"));
        btn.classList.add("active");
        resumeWrapper[index].classList.add("active");
    })
})