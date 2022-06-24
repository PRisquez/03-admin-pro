import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent{

  @Input() title = 'Sin titulo';

  @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: any }): void {
  //   // console.log(event, active);
  //   // console.log(active[0]);
  //   // console.log(active[0].index);
  //   console.log('Label ' + this.doughnutChartLabels[active[0].index]);
  //   console.log('Value ' + this.doughnutChartData.datasets[active[0].datasetIndex].data[active[0].index]);   
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: any }): void {
  //   console.log('Label ' + this.doughnutChartLabels[active[0].index]);
  //   console.log('Value ' + this.doughnutChartData.datasets[active[0].datasetIndex].data[active[0].index]); 
  // }


}
