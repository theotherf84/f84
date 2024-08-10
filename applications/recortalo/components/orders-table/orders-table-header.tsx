import { TableHead, TableHeader, TableRow } from "../../shadcn/table"

export const OrdersTableHeader = () => (
	<TableHeader>
		<TableRow>
			<TableHead>Employee</TableHead>
			<TableHead>Category</TableHead>
			<TableHead className="hidden sm:table-cell">Status</TableHead>
			<TableHead className="hidden sm:table-cell">Date</TableHead>
			<TableHead className="text-right">Amount</TableHead>
		</TableRow>
	</TableHeader>
)
