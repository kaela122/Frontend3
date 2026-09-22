export const formatNumber = (n: number) => n.toLocaleString("en-PH");

export const formatPeso = (n: number) => `₱ ${formatNumber(n)}`;

export const formatPercent = (n: number, digits = 1) => `${Math.abs(n).toFixed(digits)}%`;
