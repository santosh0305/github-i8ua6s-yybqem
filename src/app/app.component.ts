import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <div></div>
      <label>
        {{ 'ERROR.INVALIDCART'  | translate }}
      </label>
    </div>
  `,
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'spa', 'hn']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(
      {
        HOME: {
          TITLE: 'Hola Angular con ngx-translate!',
          SELECT: 'Cambia el idioma',
        },
        ERROR: {
          INVALIDCART: 'Tarjeta no valida !!',
        },
      }
        ? browserLang
        : 'en'
    );
  }
}
