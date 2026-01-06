const portfolioButtons = document.querySelectorAll(
    ".portfolio-buttons button"
);
const items =document.querySelectorAll( ".front-overlay");
console.log(items)
export function initPortfolioEvents(onFilterChange,projectsList) {
    //
    portfolioButtons.forEach((button) => {
        button.addEventListener("click", () => {
            portfolioButtons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            const category = button.dataset.filter;
            onFilterChange(category,projectsList);
        });
    });

}


