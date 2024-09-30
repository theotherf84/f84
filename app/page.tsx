import Header from "components/header"
import { WeeklyRevenueCardContainer } from "components/weekly-revenue-card/weekly-revenue-card-container"

const Page = ({
	params: { locale },
}: {
	params: { locale: string }
}) => {
	return (
		<>
			<Header />
			<main className="grid gap-6 h-screen p-6">
				<WeeklyRevenueCardContainer />
			</main>
		</>
	)
}

export default Page

export const runtime = "edge"
