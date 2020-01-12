import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/canvasjs.min';

@Component({
  selector: 'app-chart-heart-rate',
  templateUrl: './chart-heart-rate.component.html',
  styleUrls: ['./chart-heart-rate.component.css']
})
export class ChartHeartRateComponent implements OnInit {

  chart: any;
  constructor() { }
  ngOnInit() {
    if (this.chart === undefined && document.getElementById('chart-heart-rate')) {
      this.renderChart();
    }
  }

  ngDoCheck() {
    /* Check https://angular.io/guide/lifecycle-hooks#docheck for informaton about ngDoCheck */
    if (this.chart === undefined && document.getElementById('chart-heart-rate')) {
      this.renderChart();
    }
  }

  renderChart() {
    // get this from local storage
    let points = [
      { y: 65 },
      { y: 69 },
      { y: 66 },
      { y: 71 },
      { y: 74 },
      { y: 69 },
      { y: 88 },
      { y: 66 },
      { y: 71 },
      { y: 64 },
      { y: 65 },
      { y: 79 },
      { y: 69 },
      { y: 56 },
      { y: 63 },
      { y: 81 },
      { y: 76 },
      { y: 65 },
      { y: 68 },
      { y: 73 },
      { y: 75 },
      { y: 69 },
      { y: 66 },
      { y: 72 },
      { y: 69 },
      { y: 74 },
      { y: 78 },
      { y: 71 },
      { y: 73 },
      { y: 74 }
    ];
    this.chart = new CanvasJS.Chart('chart-heart-rate', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Last 30 days heart rate'
      },
      data: [{
        type: 'line',
        dataPoints: points
      }],

    });
    this.chart.render();
  }

  // ngOnDestroy() {
  //   if (this.chart) {
  //     this.chart.destroy();
  //     this.chart = null;
  //   }
  // }

}
