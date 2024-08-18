import { DailySummaryTablePerEmployeeRow } from "components/daily-summary-table-per-employee/daily-summary-table-per-employee-row"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "shadcn/table"

export const DailySummaryTablePerEmployee = async ({ data }) => (
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Employee</TableHead>
				<TableHead className="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{data?.map((order, index) => (
				<DailySummaryTablePerEmployeeRow key={index} {...order} />
			))}
		</TableBody>
	</Table>
)
