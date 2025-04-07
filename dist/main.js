import { datos } from "./data.js";
const seriesTBody = document.getElementById('seriesBody');
const averageSeasons = document.getElementById("promedio");
mostrarSeries(datos);
averageSeasons.innerHTML = `Seasons average: ${average(datos)}`;
function mostrarSeries(series) {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td class='columna-name'>${s.name}</td>
                               <td>${s.channel}</td>
                               <td>${s.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });
}
function average(series) {
    let totalSeasons = 0;
    let cantSeries = series.length;
    series.forEach(s => totalSeasons = totalSeasons + s.seasons);
    let prom = totalSeasons / cantSeries;
    return prom;
}
