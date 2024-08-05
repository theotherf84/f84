"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "shadcn/dropdown-menu"

const ColorThemeToggle = () => {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
					<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle color theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { ColorThemeToggle }
