import type { DialogProps } from "@radix-ui/react-dialog"
import type { countries } from "constants/countries"
import type { CarrierCode, CountryCallingCode, CountryCode, E164Number, NationalNumber, NumberType } from "libphonenumber-js"
import type { ComponentPropsWithoutRef, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction, TextareaHTMLAttributes } from "react"
import type { Translation } from "types/helpers"

export interface ColorThemeToggleProperties {
	messages: Partial<Translation>
}

export type CommandDialogProperties = DialogProps

export type ContentSheetProperties = { children: ReactNode; messages: Record<string, string> }

export type Country = (typeof countries)[number]

export interface DatePickerProperties {
	date: Date
	setDate: Dispatch<SetStateAction<Date | undefined>>
	shouldDisableFutureSelection?: boolean
}

export type InputProperties = InputHTMLAttributes<HTMLInputElement>

export interface NavigationBarItemListProperties {
	isOnSidebar?: boolean
	messages: any
}

export type PhoneData = {
	carrierCode?: CarrierCode
	countryCallingCode?: CountryCallingCode
	countryCode?: CountryCode
	internationalNumber?: string
	isPossible?: boolean
	isValid?: boolean
	nationalNumber?: NationalNumber
	phoneNumber?: E164Number
	possibleCountries?: string
	type?: NumberType
	uri?: string
}

export interface PhoneInputProperties extends ComponentPropsWithoutRef<"input"> {
	value?: string
	defaultCountry?: CountryCode
}

export interface SearchClientInputProperties {
	messages: any
	setClient: Dispatch<SetStateAction<number | undefined>>
}

export type TextareaProperties = TextareaHTMLAttributes<HTMLTextAreaElement>

export type UserAvatarProperties = { firstName: string; lastName?: string | null }
