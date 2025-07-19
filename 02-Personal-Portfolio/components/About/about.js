const initAbout = () => {
    // Import Chart.js
    const mainColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-01')
        .trim();
    /*Custom plugin*/

    // const createChart = (ctx, { type, labels, label, data, bgColor, borderColor = 'transparent' }, customOptions = {}) => {
    //     // Register the custom plugin
    //     return new Chart(ctx, {
    //         type,
    //         data: {
    //             labels,
    //             datasets: [{
    //                 label,
    //                 data,
    //                 backgroundColor: bgColor,
    //                 borderColor,
    //                 borderWidth: 1
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false, // allow full scaling
    //             plugins: {
    //                 legend: { display: false }
    //             },
    //             scales: type === 'radar' ? {
    //                 r: {
    //                     ticks: {
    //                         display:false
    //                     },
    //                     grid: {
    //                         color: mainColor,
    //                         drawOnChartArea: false
    //                     },
    //                     angleLines: {
    //                         color: mainColor
    //                     },
    //                     pointLabels: {
    //                         color: mainColor
    //                     }
    //                 }
    //             } : { // only use scales for non-radar charts
    //                 x: {
    //                     ticks: {
    //                         color: mainColor ,
    //                         autoSkip: true,
    //                         maxTicksLimit: 10, // limit the number of ticks on x-axis
    //                     },
    //                     grid: {
    //                         color: "transparent",
    //                         drawOnChartArea: false
    //                     },
    //                     border: { color: mainColor }
    //                 },
    //                 y: {
    //                     ticks: { color: mainColor },
    //                     grid: {
    //                         color: "transparent",
    //                         drawOnChartArea: false
    //                     },
    //                     border: { color: mainColor }
    //                 }
    //             },
    //             ...customOptions // merge any additional user-defined options
    //         }
    //     });
    // };

// 🟢 Example 1: Horizontal Bar Chart (Frontend Skills)
//     createChart(document.getElementById('chartLanguages-frontend'), {
//         type: 'radar',
//         labels: ['HTML', 'CSS', 'JS', 'TS','Bootstrap','Tailwind', 'React','Next.js',],
//         label: 'Frontend',
//         data: [80, 70, 50, 30, 50, 50, 50, 20],
//         bgColor: mainColor
//     });

// 🟢 Example 2: Radar Chart (Backend Skills)
//     createChart(document.getElementById('chartLanguages-backend'), {
//         type: 'bar',
//         labels: ['Node', 'PHP', 'Laravel', 'MongoDB', 'Spring'],
//         label: 'Backend',
//         data: [80, 70, 65, 75, 60],
//         bgColor: mainColor,
//         borderColor: mainColor
//     });


// // Example 3: Doughnut Chart (Tools)
//     createChart(document.getElementById('chartTools'), {
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


};

export default initAbout;
