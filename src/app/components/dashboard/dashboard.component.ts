import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.createBarChart();
      this.createLineChart();
    }
  }
  private createBarChart(): void {
    const canvas = document.getElementById('chart') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [
              'Empresarial',
              'Auto',
              'Casa',
              'Médico',
              'Comercios',
              'Daños (otros)',
            ],
            datasets: [
              {
                label: 'Ingresos este mes',
                data: [12000, 4000, 3000, 2500, 5000, 1500],
                backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 205, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas.');
      }
    } else {
      console.error('No se encontró el canvas con ID "chart" en el DOM.');
    }
  }

  private createLineChart(): void {
    const canvas = document.getElementById(
      'chart2'
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
            ],
            datasets: [
              {
                label: 'Empresarial',
                data: [10000, 8000, 7000, 6000, 5000, 4000, 5000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
              {
                label: 'Auto',
                data: [8000, 7000, 6000, 5000, 4000, 8000, 6500],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
              },
              {
                label: 'Casa',
                data: [6000, 5000, 4000, 8000, 2000, 1000, 5000],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas.');
      }
    } else {
      console.error('No se encontró el canvas con ID "chart2" en el DOM.');
    }
  }
}
