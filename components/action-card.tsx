import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

export const ActionCard = async ({ children, disabled = false, messages, pathname, ...properties }: any) => (
	<Card className="flex flex-1 flex-col gap-4 justify-between">
		<CardHeader>
			<CardTitle>{messages.title}</CardTitle>
			<CardDescription className="leading-relaxed">{messages.subtitle}</CardDescription>
		</CardHeader>
		<CardContent className="flex flex-row gap-2">
			<Button disabled={disabled}>
				<Link href={pathname}>{messages.action}</Link>
			</Button>
			{children}
		</CardContent>
	</Card>
)
