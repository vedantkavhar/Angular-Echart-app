# 📊 Angular ECharts App

A simple Angular application that visualizes interactive charts using **Apache ECharts**.  
This project demonstrates how to integrate ECharts with Angular components and display sample chart data dynamically.

---

## 🚀 Features

- Interactive Pie Chart using Apache ECharts
- Modular Angular components (Header & Chart)
- Sample data visualization
- Clean and responsive UI

---

## 🛠️ Tech Stack

- **Angular** — Frontend Framework
- **Apache ECharts** — Charting Library
- **TypeScript** — Programming Language

---

## 📂 Project Structure


## Project Setup

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### 1. **Set up the Angular Project**
To start the project, I created a new Angular application using the Angular CLI:

```bash
ng new angular-echarts-app
cd angular-echarts-app
```
### 2  . **Install dependencies**
Next, I installed ECharts via npm to integrate chart functionality:

```bash
npm install echarts
```
### 3  . **Generate Components**
I generated two Angular components for the header and chart:

```bash
ng generate component components/header
ng generate component components/chart
```

### 4.**Define model**
- src/app/models/chart-data.model.ts

### 4  . **Integrate ECharts**
In the chart.component.ts file, I imported ECharts and initialized a pie chart using sample data. Here’s how I initialized the chart:
- sample char.component.ts code
```bash
import * as echarts from 'echarts';

ngAfterViewInit() {
  const chartDom = document.getElementById('main')!;
  const myChart = echarts.init(chartDom);
  const option = {
    title: { text: 'Sample Pie Chart' },
    tooltip: {},
    series: [{
      type: 'pie',
      data: this.sampleData
    }]
  };
  myChart.setOption(option);
}

```
### 5  . **Run the Application**
To run the application and view the chart, I used:

```bash
ng serve
```


### 5  . **Push to GitHub**	
```bash
git init → git remote add origin ... → git push
```
