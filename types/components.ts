import type { DialogProps } from "@radix-ui/react-dialog"
import type { countries } from "constants/countries"
import type { CarrierCode, CountryCallingCode, CountryCode, E164Number, NationalNumber, NumberType } from "libphonenumber-js"
import type { ComponentPropsWithoutRef, Dispatch, InputHTMLAttributes, SetStateAction, TextareaHTMLAttributes } from "react"

export type CommandDialogProperties = DialogProps

export type Country = (typeof countries)[number]

export interface DatePickerProperties {
	date: Date
	setDate: Dispatch<SetStateAction<Date | undefined>>
	shouldDisableFutureSelection?: boolean
}

export type InputProperties = InputHTMLAttributes<HTMLInputElement>

export type PhoneData = {
	phoneNumber?: E164Number
	countryCode?: CountryCode
	countryCallingCode?: CountryCallingCode
	carrierCode?: CarrierCode
	nationalNumber?: NationalNumber
	internationalNumber?: string
	possibleCountries?: string
	isValid?: boolean
	isPossible?: boolean
	uri?: string
	type?: NumberType
}

export interface PhoneInputProperties extends ComponentPropsWithoutRef<"input"> {
	value?: string
	defaultCountry?: CountryCode
}

export type TextareaProperties = TextareaHTMLAttributes<HTMLTextAreaElement>
