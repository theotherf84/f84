"use server"

import enUSTranslationFile from "translations/en-us.json"
import esARTranslationFile from "translations/es-ar.json"
import type { Translation } from "types/helpers"

const dictionaries: Record<string, Translation> = {
	"en-us": enUSTranslationFile,
	"es-ar": esARTranslationFile,
}

export const getTranslations = async (locale = "es-ar") => await dictionaries[locale]
