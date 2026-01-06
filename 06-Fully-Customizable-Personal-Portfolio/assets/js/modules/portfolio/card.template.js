
const renderCloseButton = `
  <div class="close-mark" data-close>
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="close-icon icon">
      <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414z"/>
    </svg>
  </div>
`
const renderSlider = (gallery) => {
    if (!gallery.length) return "";

    return `
        <div class="sliders-container">
             <div class="slider-wrapper">
                  <button class="arrow-left">&#10094;</button>
                      <div class="slider-track">
                        ${gallery.map((src) => `<img src="${src}" class="slider" loading="lazy" alt="" />`).join("")}
                      </div>
                  <button class="arrow-right">&#10095;</button>  
             </div>
          <div class="slide-indicators flex flex-center gap-sm mt-1">
            ${gallery
        .map(
            (_, i) =>
                `<span class="indicator" data-index="${i}"></span>`
        )
        .join("")}
          </div>
      </div>
        
  `;
};
const renderHeader = (title, links) => {
    return `
    <header class="project-header">
      <h3 class="project-title">${title}</h3>

      <div class="project-actions">
        ${links?.live ? `<a href="${links.live}" class="anchor-link">Live</a>` : ""}
        ${links?.github ? `<a href="${links.github}" class="anchor-link">Code</a>` : ""}
        ${links?.api ? `<a href="${links.api}" class="anchor-link">API</a>` : ""}
      </div>
    </header>
  `;
};
const renderContent = (description, features, techStack, status, dates) => {
    return `
    <section class="project-content">
      <p class="project-summary">${description.long}</p>

      ${renderFeatures(features)}
      ${renderTechStack(techStack)}

      <div class="project-meta">
        <span class="project-status">${status}</span>
        <div class="project-dates">
         <span>Started At: <time>${dates.startedAt}</time> </span>
         <span>Complited At <time>${dates.finishedAt}</time></span>
        </div>
      </div>
    </section>
  `;
};
const renderFeatures = (features = []) => {
    if (!features.length) return "";

    return `
    <ul class="project-features" role="list">
      ${features.map((f) => `<li>${f}</li>`).join("")}
    </ul>
  `;
};
const renderTechStack = (techStack = {}) => {
    return `
    <div class="tech-stack mt-2">
      ${Object.entries(techStack)
        .map(
            ([key, values]) => `
            <div class="tech-group">
              <strong>${key}</strong>
              <span>${values.join(", ")}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
};
export const portfolioCardFrontOverlay = ({ images, title, slug }) => {
    const { cover } = images;
    return `
    <div class="front-overlay" >
      <div class="card-header">
        <img 
          src="${cover}" 
          alt="${title}" 
          class="portfolio-image"
        >
      </div>
      <div class="overlay-content">
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${slug}</p>
      </div>
    </div>
  `;
};
export const portfolioCardBackOverlay = ({images, title, description, links, features, techStack, status, dates}) => {
    const { gallery = [] } = images;

    return `
    <div class="back-overlay">
         <div class="back-overlay-wrapper">
            ${renderSlider(gallery)}
            <div class="project-overlay">
              ${renderHeader(title, links)}
              ${renderContent(description, features, techStack, status, dates)}
            </div>
          </div>
         ${renderCloseButton}
    </div>
  `
};

export const card=(project)=>`
        <article class="project-card" data-type="${project.type}">
            ${portfolioCardFrontOverlay(project)}
            ${portfolioCardBackOverlay(project)}
        </article>
    `