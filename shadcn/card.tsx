import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div ref={reference} className={mergeClassNames("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...properties} />
))

Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div ref={reference} className={mergeClassNames("flex flex-col space-y-1.5 p-6", className)} {...properties} />
))

CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<h3 ref={reference} className={mergeClassNames("text-2xl font-semibold leading-none tracking-tight", className)} {...properties} />
))

CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => (
	<p ref={reference} className={mergeClassNames("text-sm text-muted-foreground", className)} {...properties} />
))

CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div ref={reference} className={mergeClassNames("p-6 pt-0", className)} {...properties} />
))

CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div ref={reference} className={mergeClassNames("flex items-center p-6 pt-0", className)} {...properties} />
))

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
