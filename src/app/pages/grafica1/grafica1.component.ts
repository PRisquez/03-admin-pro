import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  chartData1 = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
    ]
  };

  chartData2 = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
    ]
  };

  chartData3 = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
    ]
  };

  chartData4 = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
    ]
  };
  
}
