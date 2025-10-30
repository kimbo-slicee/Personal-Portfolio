// let ctx = document.getElementById("canvas").getContext("2d");
//
// let barChartData = {
//     labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//         {
//             label: "BackEnd",
//             type: 'line',
//             data: [200, 500, 2300, 1855, 2096, 1686, 1805, 1405, 1564, 1230, 1258, 1266],
//             fill: false,
//             backgroundColor: "rgba(255,255,255,0.5)",
//             borderColor: "rgba(255,255,255,0.5)",
//             yAxisID: 'y1'
//         },
//         {
//             label: "FrontEnd",
//             type: 'line',
//             data: [1913, 1604, 2111, 1643, 1463, 1574, 1357, 1538, 1564, 1561, 1632, 1665],
//             fill: false,
//             backgroundColor: "rgba(155,152,152,0.98)",
//             yAxisID: 'y1'
//         },
//         {
//             type: 'bar',
//             label: "FrontEnd",
//             data: [10,12,-14,-16,18,-20,22,24,26,28,30,32],
//             fill: false,
//             backgroundColor: "#777",
//             borderColor: "#777",
//             yAxisID: 'y2'
//         },
//
//         {
//             type: 'bar',
//             label: "BackEnd",
//             data: [-8, -44, -16, -11, -30, -7, -25, 9, 0, 27, 30, 32],
//             fill: false,
//             backgroundColor:"rgba(199,191,191,1)",
//             borderColor:"rgba(255,255,255,1)",
//             yAxisID: 'y2'
//         },
//
//     ]
// };
//
// new Chart(ctx, {
//     type: 'bar',
//     data: barChartData,
//     options: {
//         responsive: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Frontend & Backend Skills with Growth Potential'
//             },
//             legend: {
//                 position: 'top'
//             }
//         },
//         tooltips: {
//             mode: 'label'
//         },
//         elements: {
//             line: {
//                 fill: false
//             }
//         },
//         scales: {
//             x: [{
//                 scaleLabel: {
//                     display: false,
//                     labelString: 'Dates'
//                 },
//                 display: false,
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true,
//                 }
//             }],
//             y1:
//                 {
//                     position:"left",
//                     type: "linear",
//                     display: true,
//                     id: "y1",
//                     gridLines: {
//                         display: true
//                     },
//                     labels: {
//                         show: true,
//
//                     }
//                 },
//             y2:{
//                 position:"right",
//                 type: "linear",
//                 display: true,
//                 id: "y2",
//                 grid: {
//                     drawOnChartArea: false
//                 },
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true,
//
//                 }
//             }
//         }
//     }
// });
