const icons = {
    code:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon--sm"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>
    `,
    live: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon--sm"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path></svg>
  `,
    github: `
    <svg viewBox="0 0 24 24" class="icon icon--sm">
      <path d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.56v-2.17c-3.2.7-3.87-1.55-3.87-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.76.4-1.26.72-1.55-2.56-.3-5.26-1.3-5.26-5.8 0-1.28.45-2.32 1.18-3.14-.12-.3-.51-1.52.12-3.18 0 0 .97-.31 3.18 1.2a10.9 10.9 0 015.8 0c2.21-1.51 3.18-1.2 3.18-1.2.63 1.66.24 2.88.12 3.18.73.82 1.18 1.86 1.18 3.14 0 4.51-2.7 5.5-5.28 5.79.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.79.56A11.55 11.55 0 0023.5 12.04C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  `,
    calendar: `
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M7 2v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H9V2H7z"/>
    </svg>
  `,
  fullscreen:`
    <svg class="icon icon--sm" viewBox="0 0 100 100"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path></svg>
  `
};
const renderCloseButton = () => `
  <button class="card-close" data-close aria-label="Close project">
    ✕
  </button>
`;

const badge = (label, variant = "default") => `
  <span class="badge badge-${variant}">
    ${label}
  </span>
`;

const renderFront = ({ title,slug, images:{cover}, status, type }) => `
      <div class="front-face">
            <div class="front-face__header">
                <!-- card image -->
                <span class="full-screen">${icons.fullscreen}</span>
                <img src="${cover}" alt="${title}" class="card-cover">
            </div>
            <div class="front-face__content">
                <div class="flex flex-center flex-between">
                    <h4>${title}</h4>
                    ${badge(status,status)}
                </div>
                <p>${slug}</p>
            </div>
      </div>
`;

const renderSlider = (gallery) => {
    if (!gallery.length) return "";
    return `
    <div class="sliders-container"> 
        <div class="slider-wrapper"> 
            <button class="arrow-left">&#10094;</button> 
                <div class="slider-track"> 
                    ${gallery.map((src) => `<img src="${src}" class="slider" loading="lazy" alt="" />`)
                            .join("")} 
                </div> 
            <button class="arrow-right">&#10095;</button> 
        </div> 
        <div class="slide-indicators flex flex-center gap-sm mt-1"> 
                    ${gallery
                          .map( (_, i) => `<span class="indicator" data-index="${i}"></span>` ) .join("")} 
        </div> 
    </div>`;
};
const renderTechStack = (techStack = {}) => `
  <div class="tech-stack">
    <h4 class="project-title">TechStack</h4>
    <div class="tech-pills mt-2">
        ${Object.entries(techStack).flatMap(([,value])=>value).map(tech=>`<div class="pill">${tech}</div>`).join('')}
    </div>
  </div>
`;

const renderMeta = (dates , role) => `
  <footer class="project-meta">
    <span class="meta-item">
          
    </span>
    <span class="meta-item">
      ${role}
    </span>
  </footer>
`;

const renderContent=(slug,live,github,long,techStack,startedAt,finishedAt,role)=>{
       return` <div class="back-overlay-content">
                     <div class="project-header">
                            <h4 class="project-title">${slug}</h4>
                            <div class="project-links flex-between gap-sm">
                                <a href="${live}" class="anchor-link flex gap-xs" target="_blank">
                                    Live 
                                <span class="flex-center">${icons.live}</span> 
                                </a>
                                <a href="${github}" class="anchor-link flex gap-xs" target="_blank">
                                <span>Code</span>
                                <span class="flex-center">${icons.code}</span>
                                </a>
                            </div>
                      </div>
                      <div class="project-details">
                            <div class="description">
                                <p>${long}</p>
                            </div>
                            ${renderTechStack(techStack)}
                      </div>
                     ${renderMeta(startedAt,finishedAt,role)}  
                </div>`
}

const renderBack = ({images:{gallery},slug,links:{live,github},description:{long},techStack,dates:{startedAt,finishedAt},role}) => `
  <div class="back-overlay">
      <div class="back-overlay-wrapper">
           ${renderSlider(gallery)}
           ${renderContent(slug,live,github,long,techStack,startedAt,finishedAt,role)}
      </div>
  </div>
`;


export const renderProjectCard = (project) => `
  <article class="project-card" 
           data-type="${project.type}" 
           data-status="${project.status}">
    ${renderFront(project)}
    ${renderBack(project)}
  </article>
`;
