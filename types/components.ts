import type { Dispatch, InputHTMLAttributes, SetStateAction, TextareaHTMLAttributes } from "react"

export interface DatePickerProperties {
	date: Date
	setDate: Dispatch<SetStateAction<Date | undefined>>
	shouldDisableFutureSelection?: boolean
}

export type InputProperties = InputHTMLAttributes<HTMLInputElement>

export type TextareaProperties = TextareaHTMLAttributes<HTMLTextAreaElement>
