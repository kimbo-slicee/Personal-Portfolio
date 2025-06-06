/*Resume Section Logic*/
const initResume=()=>{
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtn = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

resumePortfolioTabBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => activateTab(index));
});

const activateTab = (index) => {
    // Deactivate all tabs
    resumePortfolioTabBtn.forEach((btn) => btn.classList.remove("active"));

    // Hide all sections
    resumeTabContents.forEach((content) => content.classList.remove("active", "visible"));

    // Activate the selected tab
    resumePortfolioTabBtn[index].classList.add("active");

    // Show the selected section
    resumeTabContents[index].classList.add("active");
    setTimeout(() => resumeTabContents[index].classList.add("visible"), 50);
};

}
export default initResume;