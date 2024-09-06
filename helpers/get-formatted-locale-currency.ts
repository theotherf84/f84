export const getFormattedLocaleCurrency = (amount: number) =>
	new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
	}).format(amount)
