export const getFormattedLocaleDate = (date: string) =>
	new Date(date).toLocaleDateString("es-AR", {
		timeZone: "UTC",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	})
