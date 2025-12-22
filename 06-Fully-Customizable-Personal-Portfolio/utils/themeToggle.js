export const toggleTheme = () => {
    const themeButton = document.querySelector('.theme-toggle-button');

    // init theme based on local storage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    // handle theme toggle button click
   const switchTheme = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };
    themeButton.addEventListener('click', ()=>{
        // if(!document.statViewTransition){
        //     switchTheme();
        //     return;
        // }
        document.startViewTransition(()=>{
            switchTheme();
        });
    });
}