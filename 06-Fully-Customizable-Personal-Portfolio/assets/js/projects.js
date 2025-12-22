export const projects = [
    {
        id: "task-manager",
        title: "Task Manager App",
        slug: "task-manager",
        featured: true,
        status: "completed" | "in-progress" | "planned",

        description: {
            short: "A full-stack task manager with authentication.",
            long: "A complete task management system with user authentication, role-based access, and real-time updates."
        },

        techStack: {
            frontend: ["React", "Tailwind CSS"],
            backend: ["Laravel", "JWT"],
            database: ["MySQL"]
        },

        images: {
            cover: "/images/projects/task/cover.png",
            gallery: [
                "/images/projects/task/1.png",
                "/images/projects/task/2.png",
                "/images/projects/task/3.png"
            ]
        },

        links: {
            live: "https://task-manager.vercel.app",
            github: "https://github.com/yourname/task-manager",
            api: null
        },

        dates: {
            startedAt: "2024-11",
            finishedAt: "2025-01"
        },

        features: [
            "Authentication & Authorization",
            "CRUD Tasks",
            "Dark Mode",
            "Responsive UI"
        ],

        role: "Full Stack Developer",
        type: "personal",
        visibility: "public"
    },

];
