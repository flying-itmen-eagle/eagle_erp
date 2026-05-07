import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalDataService } from './core/services/local-data.service';
import { INITIAL_SKU_DATA, INITIAL_PERMISSIONS } from './core/models/mock-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private localDataService = inject(LocalDataService);
  protected readonly title = signal('erp-frontend');

  ngOnInit() {
    this.localDataService.initMockData('sku_list', INITIAL_SKU_DATA);
    this.localDataService.initMockData('permissions', INITIAL_PERMISSIONS);
    console.log('Mock Data Initialized');
  }
}
