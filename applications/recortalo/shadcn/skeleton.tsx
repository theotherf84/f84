import { classNames } from "helpers/class-names"
import type { HTMLAttributes } from "react"

export const Skeleton = ({ className, ...properties }: HTMLAttributes<HTMLDivElement>) => (
	<div className={classNames("animate-pulse rounded-md bg-muted", className)} {...properties} />
)
