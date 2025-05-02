// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chart',
//   imports: [],
//   templateUrl: './chart.component.html',
//   styleUrl: './chart.component.css'
// })
// export class ChartComponent {

// }

// 2
// import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import * as echarts from 'echarts';
// import { ChartData } from '../../models/chart-data.model';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements AfterViewInit {
//   @ViewChild('chartContainer') chartContainer!: ElementRef;

//   // Sample Data
//   data: ChartData[] = [
//     { category: 'Apples', value: 120 },
//     { category: 'Bananas', value: 200 },
//     { category: 'Cherries', value: 150 },
//     { category: 'Dates', value: 80 },
//     { category: 'Elderberries', value: 70 }
//   ];

//   ngAfterViewInit() {
//     const chart = echarts.init(this.chartContainer.nativeElement);

//     const option = {
//       title: {
//         text: 'Fruit Sales'
//       },
//       tooltip: {},
//       xAxis: {
//         type: 'category',
//         data: this.data.map(item => item.category)
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [{
//         type: 'bar',
//         data: this.data.map(item => item.value)
//       }]
//     };

//     chart.setOption(option);
//   }
// }

// 3
import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { ChartData } from '../../models/chart-data.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() chartData: ChartData[] = [];
  @Input() chartType: string = 'bar';

  chartInstance!: echarts.ECharts;

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartInstance) {
      this.updateChart();
    }
  }

  private initChart() {
    const chartDom = document.getElementById('mainChart')!;
    this.chartInstance = echarts.init(chartDom);
    this.updateChart();
  }

  private updateChart() {
    const option = {
      title: { text: 'Values per Category', left: 'center' },
      tooltip: { trigger: 'item' },
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: this.chartType === 'bar' || this.chartType === 'line'
        ? { name: 'Category' ,nameLocation: 'middle',nameGap: 38, type: 'category', data: this.chartData.map(d => d.category) }
        : undefined,
      yAxis: this.chartType === 'bar' || this.chartType === 'line'
        ? {  name: 'Value',type: 'value',nameLocation: 'middle', nameGap: 50, nameRotate: 90, }
        : undefined,
      series: [{
        name: 'Value',
        type: this.chartType,
        data: this.chartType === 'pie'
          ? this.chartData.map(d => ({ name: d.category, value: d.value }))
          : this.chartData.map(d => d.value),
        label: { show: true, position: this.chartType === 'pie' ? 'outside' : 'top' },
      }]
    };

    this.chartInstance.setOption(option);
  }
}
