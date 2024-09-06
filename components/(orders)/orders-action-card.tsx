import { QuickAddOrderFormContainer } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-container"
import { getTranslations } from "helpers/translations"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const OrdersActionCard = async () => {
	const translations = await getTranslations()

	const { action, headline, title } = translations?.orders?.pages?.root?.actionCard

	return (
		<Card className="flex flex-1 flex-col gap-4 justify-between">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="leading-relaxed">{headline}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-row gap-2">
				<Button disabled>
					<Link href="/orders/add">{action}</Link>
				</Button>
				<QuickAddOrderFormContainer />
			</CardContent>
		</Card>
	)
}
