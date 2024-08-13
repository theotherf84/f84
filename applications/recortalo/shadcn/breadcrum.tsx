import { Slot } from "@radix-ui/react-slot"
import { mergeClassNames } from "helpers/merge-class-names"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import {
	type ComponentProps as ComponentProperties,
	type ComponentPropsWithoutRef as ComponentPropertiesWithoutReference,
	type ElementRef as ElementReference,
	type ReactNode,
	forwardRef as forwardReference,
} from "react"

const Breadcrumb = forwardReference<
	HTMLElement,
	ComponentPropertiesWithoutReference<"nav"> & {
		separator?: ReactNode
	}
>(({ ...properties }, reference) => <nav ref={reference} aria-label="breadcrumb" {...properties} />)

Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = forwardReference<HTMLOListElement, ComponentPropertiesWithoutReference<"ol">>(({ className, ...properties }, reference) => (
	<ol
		ref={reference}
		className={mergeClassNames("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)}
		{...properties}
	/>
))

BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = forwardReference<HTMLLIElement, ComponentPropertiesWithoutReference<"li">>(({ className, ...properties }, reference) => (
	<li ref={reference} className={mergeClassNames("inline-flex items-center gap-1.5", className)} {...properties} />
))

BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = forwardReference<
	HTMLAnchorElement,
	ComponentPropertiesWithoutReference<"a"> & {
		asChild?: boolean
	}
>(({ asChild, className, ...properties }, reference) => {
	const Comp = asChild ? Slot : "a"

	return <Comp ref={reference} className={mergeClassNames("transition-colors hover:text-foreground", className)} {...properties} />
})

BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = forwardReference<HTMLSpanElement, ComponentPropertiesWithoutReference<"span">>(({ className, ...properties }, reference) => (
	<span
		ref={reference}
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={mergeClassNames("font-normal text-foreground", className)}
		{...properties}
	/>
))

BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({ children, className, ...properties }: ComponentProperties<"li">) => (
	<li role="presentation" aria-hidden="true" className={mergeClassNames("[&>svg]:size-3.5", className)} {...properties}>
		{children ?? <ChevronRight />}
	</li>
)

BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({ className, ...properties }: ComponentProperties<"span">) => (
	<span role="presentation" aria-hidden="true" className={mergeClassNames("flex h-9 w-9 items-center justify-center", className)} {...properties}>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More</span>
	</span>
)

BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis }
