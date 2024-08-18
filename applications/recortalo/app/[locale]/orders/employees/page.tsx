import { DailySummaryTablePerEmployeeContainer } from "components/daily-summary-table-per-employee/daily-summary-table-per-employee-container"

const Page = () => (
	<div className="grid grid-cols-2 auto-rows-max items-start gap-6 bg-muted/40">
		<div className="col-span-1">
			<DailySummaryTablePerEmployeeContainer />
		</div>
	</div>
)

export default Page
