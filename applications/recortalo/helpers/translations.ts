import "server-only"

const dictionaries: Record<string, any> = {
	"en-us": () => import("../dictionaries/en-us.json").then((module) => module.default),
	"es-ar": () => import("../dictionaries/es-ar.json").then((module) => module.default),
}

export const getTranslations = async (locale: string = "es-ar") => dictionaries[locale]?.()
