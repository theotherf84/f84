"use server"

import enUSTranslationFile from "../translations/en-us.json"
import esARTranslationFile from "../translations/es-ar.json"

type Translation = typeof enUSTranslationFile

const dictionaries: Record<string, Translation> = {
	"en-us": enUSTranslationFile,
	"es-ar": esARTranslationFile,
}

export const getTranslations = async (locale = "es-ar") => await dictionaries[locale]
