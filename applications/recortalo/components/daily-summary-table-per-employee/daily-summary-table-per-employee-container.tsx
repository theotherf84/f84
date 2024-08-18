import { DailySummaryTablePerEmployee } from "components/daily-summary-table-per-employee/daily-summary-table-per-employee"
import { TableDataPlaceholder } from "components/table-data-placeholder"
import { getOrdersWithEmployees } from "services/get-orders-with-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const DailySummaryTablePerEmployeeContainer = async () => {
	const data = await getOrdersWithEmployees()

	const filteredData = data?.filter(({ created_at }) => {
		const today = new Date().setHours(0, 0, 0, 0)
		const createdDay = new Date(created_at).setHours(0, 0, 0, 0)

		return today === createdDay
	})

	const groupedData = filteredData.reduce((accumulator, order) => {
		const employee = order.employee?.id

		accumulator[employee] = accumulator[employee] || []

		accumulator[employee].push(order)

		return accumulator
	}, {})

	const entries = Object.entries(groupedData).map(([key, value]) => ({
		[key]: value
			.map((order) => ({ employee: order.employee, cost: order.cost }))
			.reduce(
				(accumulator, current) => ({
					employee: current.employee,
					amount: accumulator.cost + current.cost,
				}),
				{ cost: 0 },
			),
	}))

	const flattenedCollection = Object.values(entries[0]).flat()

	const hasData = !!flattenedCollection?.length

	return (
		<div className="flex flex-col gap-4">
			<Card>
				<CardHeader className="px-7">
					<CardTitle>Today's orders summary</CardTitle>
					<CardDescription>Today's orders from your store grouped by employee.</CardDescription>
				</CardHeader>
				<CardContent>
					{hasData && <DailySummaryTablePerEmployee data={flattenedCollection} />}
					{!hasData && <TableDataPlaceholder />}
				</CardContent>
			</Card>
		</div>
	)
}
