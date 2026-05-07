import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  constructor() { }

  /**
   * 從 LocalStorage 取得資料
   * @param key 鍵值
   */
  getData<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data) as T;
    } catch (e) {
      console.error('Error parsing local storage data', e);
      return null;
    }
  }

  /**
   * 儲存資料到 LocalStorage
   * @param key 鍵值
   * @param data 資料
   */
  setData<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * 初始化 Mock Data
   * @param key 鍵值
   * @param initialData 初始資料
   */
  initMockData<T>(key: string, initialData: T): void {
    if (!this.getData(key)) {
      this.setData(key, initialData);
    }
  }
}
