const pages=document.querySelectorAll(".page-container");
pages.forEach((page,index)=>{
    page.style.zIndex=String(pages.length - index -1);
    page.addEventListener("click", (e)=>{
        if(page.classList.contains("front-cover") && index===0){
            document.documentElement.style.setProperty("--translate-x", "100%");
            if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                document.documentElement.style.setProperty("--translate-x", "50%");
                page.classList.remove("flip");
                page.style.zIndex=String(pages.length - index);
            }
        }else if(page.classList.contains("back-cover")){
            document.documentElement.style.setProperty("--translate-x", "150%");
            if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                document.documentElement.style.setProperty("--translate-x", "100%");
                page.classList.remove("flip");
                // Delay the zIndex change to allow the flip animation to complete
                // before changing the zIndex back to its original value.
                setTimeout(()=>{
                    page.style.zIndex=String(pages.length - index);
                },100 + index * 100);
            }
        }else{
            if(e.target.classList.contains("btn")) return; // Ignore clicks on buttons
                if(!page.classList.contains("flip")){
                page.classList.add("flip");
                page.style.zIndex=String(pages.length+index);
            }else{
                page.classList.remove("flip");
                setTimeout(()=>{
                page.style.zIndex=String(pages.length - index);
                },200 + index *100);
            }
        }
    })
})
// Add event listener for the download Cv button
const downloadCvButton = document.querySelector(".download-cv");
downloadCvButton.addEventListener("click", () => {
        const a = document.createElement("a");
        a.setAttribute("download", "");
        a.href = "assets/files/CV.file"; // Path to your CV file
        a.download = "CV.file"; // Name of the downloaded file
        document.body.appendChild(a);
        a.click();
});
