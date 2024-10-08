"use client"

import { Command as CommandPrimitive } from "cmdk"
import { mergeClassNames } from "helpers/merge-class-names"
import { Search } from "lucide-react"
import { type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes, forwardRef } from "react"
import { Dialog, DialogContent } from "shadcn/dialog"
import type { CommandDialogProperties } from "types/components"

const Command = forwardRef<ElementRef<typeof CommandPrimitive>, ComponentPropsWithoutRef<typeof CommandPrimitive>>(({ className, ...properties }, reference) => (
	<CommandPrimitive ref={reference} className={mergeClassNames("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)} {...properties} />
))

Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...properties }: CommandDialogProperties) => {
	return (
		<Dialog {...properties}>
			<DialogContent className="overflow-hidden p-0 shadow-lg">
				<Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	)
}

const CommandInput = forwardRef<ElementRef<typeof CommandPrimitive.Input>, ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...properties }, reference) => (
	<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
		<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
		<CommandPrimitive.Input
			ref={reference}
			className={mergeClassNames(
				"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...properties}
		/>
	</div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = forwardRef<ElementRef<typeof CommandPrimitive.List>, ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(({ className, ...properties }, reference) => (
	<CommandPrimitive.List ref={reference} className={mergeClassNames("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...properties} />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = forwardRef<ElementRef<typeof CommandPrimitive.Empty>, ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>((properties, reference) => (
	<CommandPrimitive.Empty ref={reference} className="py-6 text-center text-sm" {...properties} />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = forwardRef<ElementRef<typeof CommandPrimitive.Group>, ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(({ className, ...properties }, reference) => (
	<CommandPrimitive.Group
		ref={reference}
		className={mergeClassNames(
			"overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
			className,
		)}
		{...properties}
	/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = forwardRef<ElementRef<typeof CommandPrimitive.Separator>, ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>>(({ className, ...properties }, reference) => (
	<CommandPrimitive.Separator ref={reference} className={mergeClassNames("-mx-1 h-px bg-border", className)} {...properties} />
))

CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = forwardRef<ElementRef<typeof CommandPrimitive.Item>, ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(({ className, ...properties }, reference) => (
	<CommandPrimitive.Item
		ref={reference}
		className={mergeClassNames(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
			className,
		)}
		{...properties}
	/>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
	return <span className={mergeClassNames("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...properties} />
}

CommandShortcut.displayName = "CommandShortcut"

export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator }
