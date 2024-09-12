"use client"

import { CommandLoading } from "cmdk"
import { UserAvatar } from "components/user-avatar"
import { mergeClassNames } from "helpers/merge-class-names"
import { useSearchClient } from "hooks/use-search-client"
import { Check, ChevronsUpDown } from "lucide-react"
import React, { useState } from "react"
import { Button } from "shadcn/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "shadcn/command"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"
import type { SearchClientInputProperties } from "types/components"

const SearchClientInput = ({ onSelect }: SearchClientInputProperties) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const { handleSearch, loading, query, results, selectedItem, setSelectedItem } = useSearchClient()

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button aria-expanded={open} role="combobox" className="justify-between" variant="outline">
					{selectedItem ? (
						<>
							<div className="flex flex-row gap-4 items-center justify-center">
								<UserAvatar firstName={selectedItem.first_name} lastName={selectedItem.last_name} />
								{selectedItem.first_name} {selectedItem.last_name}
							</div>
						</>
					) : (
						"Select place..."
					)}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0">
				<Command>
					<CommandInput placeholder="Search the place..." onValueChange={(value) => handleSearch(value)} className="w-full" />
					<CommandList>
						{loading ? (
							<CommandLoading>
								<CommandEmpty>Type to search</CommandEmpty>
							</CommandLoading>
						) : Object.keys(results).length ? (
							<CommandGroup>
								{results.map((item) => (
									<CommandItem
										key={item.id}
										value={item.first_name}
										onSelect={(currentValue: string) => {
											const item = results?.find((item) => item.first_name === currentValue)

											setValue(currentValue === value ? "" : currentValue)
											setSelectedItem(item ?? null)

											onSelect(item ?? null)

											setOpen(false)
										}}
									>
										<Check className={mergeClassNames("mr-2 h-4 w-4", value === item.first_name ? "opacity-100" : "opacity-0")} />
										{item.first_name}
									</CommandItem>
								))}
							</CommandGroup>
						) : (
							<CommandEmpty>No results found.</CommandEmpty>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default SearchClientInput
