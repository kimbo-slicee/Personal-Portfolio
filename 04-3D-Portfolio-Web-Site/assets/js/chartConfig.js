const mainColor= '#1a1a1a'; // Main color for the charts
const createChart = (ctx, { type, labels, label, data, bgColor, borderColor = 'transparent' }, customOptions = {}) => {
    // Register the custom plugin
    return new Chart(ctx, {
        type,
        data: {
            labels,
            datasets: [{
                label,
                data,
                backgroundColor: bgColor,
                borderColor,
                borderWidth: 1,
                borderRadius: 5,
                pointBackgroundColor: '#E4D1B4FF',
                pointBorderColor: mainColor,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // allow full scaling
            plugins: {
                legend: { display: false }
            },
            scales: type === 'radar' ? {
                r: {
                    ticks: {
                        display:false
                    },
                    grid: {
                        color: mainColor,
                        drawOnChartArea: false
                    },
                    angleLines: {
                        color: mainColor
                    },
                    pointLabels: {
                        color: mainColor
                    }
                }
            } : { // only use scales for non-radar charts
                x: {
                    ticks: {
                        color: mainColor ,
                        autoSkip: true,
                        maxTicksLimit: 10, // limit the number of ticks on x-axis
                    },
                    grid: {
                        color: "transparent",
                        drawOnChartArea: false
                    },
                    border: { color: mainColor }
                },
                y: {
                    ticks: { color: mainColor },
                    grid: {
                        color: "transparent",
                        drawOnChartArea: false
                    },
                    border: { color: mainColor }
                }
            },
            ...customOptions // merge any additional user-defined options
        }
    });
};

// 🟢 Example 1: Horizontal Bar Chart (Frontend Skills)
    createChart(document.getElementById('chartLanguages-frontend'), {
        type: 'radar',
        labels: ['HTML', 'CSS', 'JS', 'TS','Bootstrap','Tailwind', 'React','Next.js','Node', 'PHP', 'Laravel', 'Java', 'Spring'],
        data: [90, 85, 80, 75, 70, 65, 80, 75, 60, 70, 65, 30, 20],
        bgColor: mainColor
    })

// 🟢 Example 2: Radar Chart (Backend Skills)
    createChart(document.getElementById('data-bases'), {
        type: 'bar',
        labels: ['MYSQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
        label: 'Databases',
        data: [50, 30, 50, 60, 50],
        fill: false,
        bgColor: mainColor,
        borderColor: mainColor,
        borderWidth: 1

    });

    // Example 3: Doughnut Chart (Tools)
//     createChart(document.getElementById('dataBases'), {
//         type: 'doughnut',
//         labels: ['Git', 'VSCode', 'Figma', 'Postman'],
//         label: 'Tools',
//         data: [90, 85, 70, 80],
//         bgColor: [
//             'rgba(255, 99, 132, 0.3)',
//             'rgba(54, 162, 235, 0.3)',
//             'rgba(255, 206, 86, 0.3)',
//             'rgba(75, 192, 192, 0.3)'
//         ]
//     });
