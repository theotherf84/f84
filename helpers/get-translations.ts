import "server-only"

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
	"en-us": () => import("../translations/en-us.json").then((module) => module.default),
	"es-ar": () => import("../translations/es-ar.json").then((module) => module.default),
}

export const getTranslations = async (locale = "es-ar") => dictionaries[locale]?.()
