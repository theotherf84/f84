import { OrdersTableRow } from "components/(orders)/orders-table/orders-table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const OrdersTable = async ({ data }) => (
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Employee</TableHead>
				<TableHead>Category</TableHead>
				<TableHead className="hidden sm:table-cell">Status</TableHead>
				<TableHead className="hidden sm:table-cell">Date</TableHead>
				<TableHead className="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{data?.map(({ created_at, ...order }) => (
				<OrdersTableRow key={created_at} created_at={created_at} {...order} />
			))}
		</TableBody>
	</Table>
)
