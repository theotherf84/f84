import { BoxSelect } from "lucide-react"

export const TableDataPlaceholder = () => (
	<div className="items-center justify-center flex flex-col gap-6">
		<BoxSelect className="h-10 text-muted-foreground w-10" />
		<p className="text-muted-foreground flex">No data available</p>
	</div>
)
