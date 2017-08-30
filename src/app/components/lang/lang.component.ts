import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'lang',
  templateUrl: './lang.component.html'
})
export class LangComponent implements OnInit {

  public selectedLang: any;
  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    this.supportedLanguages = [
      { display: 'Romanian', value: 'ro' },
      { display: 'Russian', value: 'ru' },
      { display: 'English', value: 'en' }
    ];

    let selected = 'ro';

    let lang_value = localStorage.getItem('lang_value');
    if (lang_value != "")
      selected = lang_value;

    this.selectLang(selected);

    this.selectedLang = this.supportedLanguages.find(s => s.value == selected);

    //console.clear();
    //console.log("x = " + selectedLang.display);
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    localStorage.setItem('lang_value', lang);
  }
}
