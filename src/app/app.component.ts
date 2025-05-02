// import { Component } from '@angular/core';
// import { HeaderComponent } from './components/header/header.component';
// import { ChartComponent } from './components/chart/chart.component';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,  
//   imports: [RouterOutlet, HeaderComponent, ChartComponent],  
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angularEchartsapp';
// }



// 3

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartData } from './models/chart-data.model';
import { DataService } from './services/data.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sampleData: ChartData[] = [];
  selectedChartType: string = 'bar';
  chartTypes: string[] = ['bar', 'pie', 'line'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.sampleData = this.dataService.getSampleData();
  }

  onChartTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedChartType = target.value;
  }
}
