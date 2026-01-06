/* ================== Fetching projects from projects.json */
export const fetchAllProjects = async ()=>{
    try{
        const res = await fetch("/public/data/projects.json");
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json()
    }catch (err){
        console.error(err);
        return [];
    }
}