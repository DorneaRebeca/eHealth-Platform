import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/canvasjs.min';

@Component({
  selector: 'app-chart-temperature',
  templateUrl: './chart-temperature.component.html',
  styleUrls: ['./chart-temperature.component.css']
})
export class ChartTemperatureComponent implements OnInit {
  chart: any;
  constructor() { }
  ngOnInit() {
    if (this.chart === undefined && document.getElementById('chart-temp')) {
      this.renderChart();
    }
  }

  ngDoCheck() {
    /* Check https://angular.io/guide/lifecycle-hooks#docheck for informaton about ngDoCheck */
    if (this.chart === undefined && document.getElementById('chart-temp')) {
      this.renderChart();
    }
  }

  renderChart() {
    // get this from local storage

    let points = [
      { y: 36.1 },
      { y: 36.2 },
      { y: 36.4 },
      { y: 36.2 },
      { y: 36.7 },
      { y: 37.1 },
      { y: 36.8 },
      { y: 36.5 },
      { y: 36.2 },
      { y: 36.4 },
      { y: 36.1 },
      { y: 36.7 },
      { y: 36.6 },
      { y: 36.7 },
      { y: 36.1 },
      { y: 36.3 },
      { y: 36.4 },
      { y: 36.5 },
      { y: 36.5 },
      { y: 36.4 },
      { y: 36.4 },
      { y: 36.4 },
      { y: 36.4 },
      { y: 36.6 },
      { y: 36.3 },
      { y: 36.4 },
      { y: 36.2 },
      { y: 36.4 },
      { y: 36.6 },
      { y: 36.4 }
    ];
    let date = new Date(JSON.parse(localStorage.getItem('temperatureData'))[0].date);
    console.log(date);
    console.log(date.getDate());
    this.chart = new CanvasJS.Chart('chart-temp', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Last 30 days body temperature'
      },
      data: [{
        type: 'line',
        dataPoints: points
      }],

    });
    this.chart.render();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

}
