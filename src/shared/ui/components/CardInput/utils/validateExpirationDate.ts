export const validateExpirationDate = (formattedValue: string) => {
  const cleaned = formattedValue.replace(/\D/g, '');

  if (cleaned.length === 4) {
    const month = parseInt(cleaned.slice(0, 2), 10);
    const year = parseInt('20' + cleaned.slice(2, 4), 10);

    const currentDate = new Date();
    const expirationDate = new Date(year, month - 1);

    const isMonthValid = month >= 1 && month <= 12;
    const isDateValid = expirationDate > currentDate;

    return isMonthValid && isDateValid;
  } else {
    return true; // Reset validation if input is incomplete
  }
};
