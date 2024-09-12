import { QuickAddOrderFormContainer } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-container"
import { getTranslations } from "helpers/get-translations"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const OrdersActionCard = async () => {
	const { ordersPageActionCardMainButtonLabel, ordersPageActionCardSubtitle, ordersPageActionCardTitle } = await getTranslations()

	return (
		<Card className="flex flex-1 flex-col gap-4 justify-between">
			<CardHeader>
				<CardTitle>{ordersPageActionCardTitle}</CardTitle>
				<CardDescription className="leading-relaxed">{ordersPageActionCardSubtitle}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-row gap-2">
				<Button disabled>
					<Link href="/orders/add">{ordersPageActionCardMainButtonLabel}</Link>
				</Button>
				<QuickAddOrderFormContainer />
			</CardContent>
		</Card>
	)
}
