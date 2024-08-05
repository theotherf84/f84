import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { Input } from "shadcn/input"

const Page = () => {
	return (
		<div className="grid gap-6">
			<Card className="text-muted-foreground">
				<CardHeader>
					<CardTitle>Store Name</CardTitle>
					<CardDescription>Used to identify your store in the marketplace.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<Input disabled name="store-name" placeholder="Store name" />
					</form>
				</CardContent>
				<CardFooter className="px-6 py-4">
					<Button disabled>Save name</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Page
