import { DailySummaryTablePerEmployeeContainer } from "components/daily-summary-table-per-employee/daily-summary-table-per-employee-container"

const Page = () => (
	<div className="bg-muted/40 h-full p-6">
		<div className="md:container md:mx-auto">
			<DailySummaryTablePerEmployeeContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
