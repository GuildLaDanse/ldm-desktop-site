import {Injectable, OnInit} from '@angular/core';
import {dark, light, Theme} from './themes';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  PreferredThemeCookieName = '__LaDanse.Preferred.Theme';

  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  constructor(private cookieService: CookieService) {
  }

  initTheme(): void {

    const storedThemeName = this.cookieService.get(this.PreferredThemeCookieName);

    if (storedThemeName === 'light') {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    this.cookieService.set(
      this.PreferredThemeCookieName,
      this.active.name,
      this.createCookieExpirationDate(),
      '/',
      null,
      null,
      'Lax'
      );

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  createCookieExpirationDate(): Date {
    const cookieExpirationDate = new Date();

    cookieExpirationDate.setFullYear(cookieExpirationDate.getFullYear() + 5);

    return cookieExpirationDate;
  }
}
