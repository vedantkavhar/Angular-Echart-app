import { Injectable } from '@angular/core';
import { ChartData } from '../models/chart-data.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  getSampleData(): ChartData[] {
    return [
      { category: 'A', value: 10 },
      { category: 'B', value: 15 },
      { category: 'C', value: 20 },
      { category: 'D', value: 25 },
      { category: 'E', value: 30 },
    ];
  }
}
