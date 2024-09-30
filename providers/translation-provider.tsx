"use client"

import { TranslationContext } from "contexts/translation-context"
import type { ReactNode } from "react"
import type { Translation } from "types/helpers"

export const TranslationProvider = ({ children, value }: { children: ReactNode; value: Partial<Translation> }) => (
	<TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
)
