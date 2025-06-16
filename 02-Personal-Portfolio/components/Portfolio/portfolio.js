const iniPortFolio = async () => {
    let activeCategory = "All";
    let activeSubcategory = null;

    const tabsContainer = document.querySelector(".portfolio-tabs");
    const subTabs = document.querySelector(".portfolio-sub-tabs");
    const cardsContainer = document.querySelector(".portfolio-container");

    const createListItem = (label, className = "") =>
        `<li><a class="tab-btn ${className}" data-category="${label}">${label}</a></li>`;

    const createCard = (category, { image, title, description, technologies }) => {
        return `
      <div class="card-with-modal">
        <div class="portfolio-card">
          <div class="card-img">
            <img src="${image}" alt="${title}">
          </div>
          <div class="card-info">
            <span>${category}</span>
            <h3>${title}</h3>
            <i class="ri-arrow-right-up-line card-btn"></i>
          </div>
        </div>
        <div class="portfolio-modal-backdrop">${backdropContent(image,title,description,technologies)}</div>
    `;
    };
    const backdropContent = (image,title, description, technologies) => {
        return `
           <div class="portfolio-modal">
            <a class="modal-close-btn"><i class="ri-close-line"></i></a>
            <div class="modal-content">
              <div class="modal-image">
                <img src="${image}" alt="${title}">
              </div>
              <h4 class="modal-title">${title}</h4>
              <p class="description">
                <span>Description:</span>
                ${description}
              </p>
              <ul class="technologies">
                <span>Technologies:</span>
                ${technologies?.map((tech) => `<li>${tech}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
        `;
    }

    const fetchPortfolioData = async () => {
        try {
            const response = await fetch("../../data/portfolio.json");
            return await response.json();
        } catch (err) {
            console.error(`error : ${err}`);
            return [];
        }
    };

    const updateMainTabs = (data) => {
        tabsContainer.innerHTML = createListItem("All", "active");
        data.forEach(({ category }) => {
            tabsContainer.innerHTML += createListItem(category);
        });
    };

    const handleTabActivation = (tabList, callback) => {
        tabList.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabList.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");
                callback(tab.dataset["category"]);
            });
        });
    };
    const displayBackdrop=()=>{
        const cards=cardsContainer.querySelectorAll(".card-with-modal");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                const backdrop = card.querySelector(".portfolio-modal-backdrop");
                backdrop.classList.add("active");
                backdrop.firstElementChild.classList.add("active");
            });
        });
    }

    // close model
    const closeModal = () => {
        const closeBtns = document.querySelectorAll(".modal-close-btn");
        closeBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const backdrop = btn.closest(".portfolio-modal-backdrop");
                e.stopPropagation()
                backdrop.classList.remove("active");
                backdrop.firstElementChild.classList.remove("active");
            });
        });
    }


    const showProjects = (category, projects) => {
        cardsContainer.innerHTML = "";
        projects.forEach((project, i) => {
            const el = document.createElement("div");
            el.innerHTML = createCard(category, project);
            el.style.animationDelay = `${i * 100}ms`;
            cardsContainer.appendChild(el.firstElementChild);
        });
        displayBackdrop();
        closeModal()
    };

    const displayCategoryProjects = (data) => {
        if (activeCategory === "All") {
            const allProjects = data.flatMap(({ category, projects }) =>
                projects.map((p) => ({ category, ...p }))
            );
            showProjects("All", allProjects);
        } else {
            const { category, projects } = data.find((d) => d.category === activeCategory);
            showProjects(category, projects);
        }
    };

    const displaySubTabs = (data) => {
        subTabs.innerHTML = "";
        const found = data.find((d) => d.category === activeCategory);
        if (found?.subcategories) {
            found.subcategories.forEach((subCat) => {
                subTabs.innerHTML += createListItem(subCat);
            });

            const subTabLinks = subTabs.querySelectorAll(".tab-btn");
            handleTabActivation(subTabLinks, (subcategory) => {
                activeSubcategory = subcategory;
                const subProjects = found.projects.filter((p) =>
                    p.technologies.includes(subcategory)
                );
                showProjects(activeCategory, subProjects);
            });
        }
    };

    const data = await fetchPortfolioData();
    updateMainTabs(data);
    displayCategoryProjects(data);

    const mainTabLinks = document.querySelectorAll(".portfolio-tabs .tab-btn");
    handleTabActivation(mainTabLinks, (category) => {
        activeCategory = category;
        activeSubcategory = null;
        displaySubTabs(data);
        displayCategoryProjects(data);
    });

    //display card backdrop
    /*Using Medium RSS(Really Simple Syndication)*/
    const fetchArticles = async () => {
        try {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohammedelaouri");
            const data = await response.json();

            // Limit to latest 5 articles
            const articles = data.items.slice(0, 9).map(item => ({
                image:item.content.match(/<img[^>]+src="([^">]+)"/)[1] || "https://via.placeholder.com/150",
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
            }));
            console.log(articles); // Now you can use this for rendering
            return articles;
        } catch (err) {
            console.error("Failed to fetch Medium articles:", err);
        }
    };
};

export default iniPortFolio;
