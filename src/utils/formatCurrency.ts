export type FormatCurrencyOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

/** Formats a numeric amount using the Intl currency formatter. */
export function formatCurrency(amount: number, { locale = "en-US", currency = "EUR", ...options }: FormatCurrencyOptions = {}): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency, ...options }).format(amount);
}
