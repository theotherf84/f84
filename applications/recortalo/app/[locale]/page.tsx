import Header from "components/header"
import { getTranslations } from "helpers/translations"

const Page = async ({
	params: { locale },
}: {
	params: { locale: string }
}) => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const translations = await getTranslations(locale as any)

	return (
		<>
			<Header />
			<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-2 py-6">This is a dashboard</main>
		</>
	)
}

export default Page
