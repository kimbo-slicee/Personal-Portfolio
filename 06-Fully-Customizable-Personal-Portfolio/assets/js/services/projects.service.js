let cache = null;

async function loadProjects() {
    if (cache) return cache;

    const res = await fetch("/public/data/projects.json");
    if (!res.ok) throw new Error("Failed to load projects");

    cache = await res.json();
    return cache;
}

export async function getAllProjects() {
    return loadProjects();
}

export async function getProjectsByCategory(category) {
    const projects = await loadProjects();

    if (category === "all") return projects;

    return projects.filter(
        project => project.type === category
    );
}
