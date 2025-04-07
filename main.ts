import { datos } from "./data.js";
import { Serie } from "./serie.js";

const seriesTBody: HTMLElement = document.getElementById('seriesBody')!;
const averageSeasons: HTMLElement = document.getElementById("promedio")!;
const detalle: HTMLElement = document.getElementById("card-descripcion")!;

mostrarSeries(datos);
averageSeasons.innerHTML = `Seasons average: ${average(datos)}`;

function mostrarSeries(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");

        let tdId = document.createElement("td");
        tdId.textContent = s.id.toString(); 
        trElement.appendChild(tdId);

        let tdName = document.createElement("td");
        tdName.className = 'columna-name';
        tdName.textContent = s.name;
        tdName.addEventListener("click", () => mostrarDetalles(s));
        trElement.appendChild(tdName);

        let tdChannel = document.createElement("td");
        tdChannel.textContent = s.channel;
        trElement.appendChild(tdChannel);

        let tdSeasons = document.createElement("td");
        tdSeasons.textContent = s.seasons.toString();
        trElement.appendChild(tdSeasons);

        seriesTBody.appendChild(trElement);
    });
}

function average(series: Serie[]): number {
    let totalSeasons: number = 0;
    let cantSeries: number = series.length;
    series.forEach(s => totalSeasons = totalSeasons + s.seasons);
    let prom: number = totalSeasons / cantSeries;
    return prom;
}

function mostrarDetalles(serie: Serie): void {
    detalle.innerHTML = `<div class="card">
    <img class="card-img-top" src="${serie.image}" alt="img" width="70" height="200">
     <div class="card-body">
       <h3 class="card-title">${serie.name}</h3>
       <p class="card-text">${serie.descripcion}</p>
       <a href="${serie.url}" class="card-url">${serie.url}</a>
     </div>
    </div>` 
}