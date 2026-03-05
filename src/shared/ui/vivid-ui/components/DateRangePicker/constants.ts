export const DATE_RANGE_SEPARATOR = ' – ';

// Custom mask for date range input that allows entering two dates with separator
export const dateRangeOptions = {
  mask: [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    '–',
    ' ',
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};
