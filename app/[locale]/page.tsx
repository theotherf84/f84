import Header from "components/header"
import { WeeklyRevenueCardContainer } from "components/weekly-revenue-card/weekly-revenue-card-container"
import { getTranslations } from "helpers/translations"

const Page = async ({
	params: { locale },
}: {
	params: { locale: string }
}) => {
	const translations = await getTranslations(locale)

	return (
		<>
			<Header />
			<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-2 py-6">
				<WeeklyRevenueCardContainer />
			</main>
		</>
	)
}

export default Page