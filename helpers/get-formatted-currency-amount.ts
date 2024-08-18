export const getFormattedCurrencyAmount = (amount: number) =>
	new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
	}).format(amount)
