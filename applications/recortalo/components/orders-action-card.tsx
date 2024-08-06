import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { getTranslations } from "helpers/translations"
import { QuickAddFormContainer } from "components/orders-forms/orders-quick-add-form-container"

export const OrdersActionCard = async () => {
	const translations = await getTranslations("")
	const { action, headline, title } = translations?.orders?.pages?.root?.actionCard

	return (
		<Card className="flex flex-col gap-2">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="leading-relaxed">{headline}</CardDescription>
			</CardHeader>
			<CardFooter className="gap-4">
				<Button disabled>
					<Link href="/orders/add">{action}</Link>
				</Button>
				<QuickAddFormContainer />
			</CardFooter>
		</Card>
	)
}
