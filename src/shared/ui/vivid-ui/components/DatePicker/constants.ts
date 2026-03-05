import { maskitoDateOptionsGenerator } from '@maskito/kit';

export const DATE_FORMAT = 'dd.MM.yyyy';
export const DISPLAY_DATE_FORMAT = 'MMM d';
export const DISPLAY_DATE_FORMAT_WITH_YEAR = 'MMM d, yyyy';

export const options = maskitoDateOptionsGenerator({
  mode: DATE_FORMAT.toLowerCase().replace('.', '/') as 'dd/mm/yyyy',
  separator: '.',
});
