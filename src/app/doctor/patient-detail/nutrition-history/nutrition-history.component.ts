import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/canvasjs.min';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-nutrition-history',
  templateUrl: './nutrition-history.component.html',
  styleUrls: ['./nutrition-history.component.css']
})
export class NutritionHistoryComponent implements OnInit {
  chart: any;

  constructor(private patientService: PatientService) { }
  ngOnInit() {
    if (this.chart === undefined && document.getElementById('chart-nutrition-history')) {
      this.renderChart();
    }
  }

  ngDoCheck() {
    /* Check https://angular.io/guide/lifecycle-hooks#docheck for informaton about ngDoCheck */
    if (this.chart === undefined && document.getElementById('chart-nutrition-history')) {
      this.renderChart();
    }
  }

  renderChart() {
    // get this from local storage
    let points = [];
    for (var i = 1; i <= 31; i++) {
      let str = new Date(2020, 0, i);
      const meals = this.patientService.getMealsForDay(str);
      const val = meals.reduce( (start, el) => el.calories + start, 0);
      let pretty = this.patientService.getMealsForDay(str).map(obj => obj.name + ':' + obj.calories + ' kcal\n');
      points.push( {y: val, pretty: pretty} );
    }

    this.chart = new CanvasJS.Chart('chart-nutrition-history', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Last 30 days nutrition stats'
      },
      toolTip: {
        content: "food on {x} Jan: {pretty}"
      },
      data: [{
        type: 'line',
        dataPoints: points
      }],

    });
    this.chart.render();
  }

  getonDay(x) {

  }

  // ngOnDestroy() {
  //   if (this.chart) {
  //     this.chart.destroy();
  //     this.chart = null;
  //   }
  // }
}
