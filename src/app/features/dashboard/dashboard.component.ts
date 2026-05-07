import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, MatCardModule, MatIconModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  today = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  kpiCards = [
    { label: '今日已入庫',    value: '312 件',          icon: 'move_to_inbox',   colorClass: 'card-blue'   },
    { label: '全品項庫存水位', value: '14,820 件',       icon: 'inventory_2',     colorClass: 'card-green'  },
    { label: '今日銷售額',    value: 'NT$ 184,500',     icon: 'trending_up',     colorClass: 'card-orange' },
    { label: '待處理單據',    value: '11 筆',           icon: 'pending_actions', colorClass: 'card-red'    },
  ];

  // 今日銷售趨勢：每 2 小時一個節點 (00:00 ~ 18:00)
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0, 8200, 21500, 45000, 67800, 98400, 132000, 158900, 184500],
        label: '今日累計銷售額（NT$）',
        borderColor: '#f39c12',
        backgroundColor: 'rgba(243,156,18,0.08)',
        pointBackgroundColor: '#f39c12',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      }
    ],
    labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00'],
  };

  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e2a3a',
        titleColor: '#fff',
        bodyColor: '#f39c12',
        padding: 14,
        callbacks: {
          label: (ctx) => ` NT$ ${(ctx.raw as number).toLocaleString()}`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#888', font: { size: 12 } }
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          color: '#888',
          callback: (v: any) => v >= 1000 ? `NT$ ${(v / 1000).toFixed(0)}K` : `NT$ ${v}`
        }
      }
    }
  };

  ngOnInit(): void {}
}
