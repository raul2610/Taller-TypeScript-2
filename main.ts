import { datos } from "./data.js";
import { Serie } from "./serie.js";

const seriesTBody: HTMLElement = document.getElementById('seriesBody')!;
const averageSeasons: HTMLElement = document.getElementById("promedio")!;

mostrarSeries(datos);
averageSeasons.innerHTML = `Seasons average: ${average(datos)}`

function mostrarSeries(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td class='columna-name'>${s.name}</td>
                               <td>${s.channel}</td>
                               <td>${s.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });
}
function average (series: Serie[]): number {
    let totalSeasons: number = 0;
    let cantSeries: number = series.length;
    series.forEach(s => totalSeasons = totalSeasons + s.seasons);
    let prom: number = totalSeasons/cantSeries;
    return prom
}