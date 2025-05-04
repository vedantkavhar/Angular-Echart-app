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
// echart details
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
