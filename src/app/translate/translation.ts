// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_RO_NAME, LANG_RO_TRANS } from './lang-ro';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_RO_NAME]: LANG_RO_TRANS,
    [LANG_RU_NAME]: LANG_RU_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];