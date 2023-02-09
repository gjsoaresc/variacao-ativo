import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-variant-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  chartOptions: ChartOptions = {};
  chartData!: ChartData;

  @Input() response: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('chnages', this.response)
    if (changes['response'] && this.response) {
      this.chartData = {
        labels: this.response.labels,
        datasets: [
          {
            label: 'Variation D-1',
            data: this.response.result
          },
          {
            label: 'Variation since the beginning',
            data: this.response.current
          }
        ]
      }
    }
  }
}
