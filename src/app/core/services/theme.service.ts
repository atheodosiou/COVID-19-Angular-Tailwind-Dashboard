import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type ThemeType = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeChanged$: Subject<ThemeType> = new Subject<ThemeType>();

  public toggleTheme(): void {
    const classList = document.getElementsByTagName('body').item(0)?.classList;
    // classList ? classList.toggle('dark') : null;
    if (classList) {
      if (classList.toggle('dark')) {
        this.themeChanged$.next('dark');
      } else {
        this.themeChanged$.next('light');
      }
    }
  }

  public get onChange(): Observable<ThemeType> {
    return this.themeChanged$.asObservable();
  }
}
