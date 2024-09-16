"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import React from "react"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import type { ColorThemeToggleProperties } from "types/components"

export const ColorThemeToggle = ({ messages }: ColorThemeToggleProperties) => {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
					<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{messages.accessibility.screenReader.toggleColorTheme}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>{messages.colorTheme.light}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>{messages.colorTheme.dark}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>{messages.colorTheme.system}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
