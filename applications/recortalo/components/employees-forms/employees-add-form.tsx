import { Input } from "shadcn/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { SubmitButton } from "components/submit-button"
import { action } from "actions/add-employees"
import { Label } from "shadcn/label"

export const AddEmployeeForm = () => (
	<form action={action} className="flex flex-col gap-2 lg:w-fit">
		<Card className="flex flex-col">
			<CardHeader>
				<CardTitle>Add a staff member</CardTitle>
				<CardDescription>Used to identify your staff members to assign actions and workflows.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label htmlFor="first-name">First name</Label>
					<Input name="first-name" placeholder="First name" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="last-name">Last name</Label>
					<Input name="last-name" placeholder="Last name" />
				</div>
			</CardContent>
			<CardFooter className="px-6 py-4">
				<SubmitButton>Save staff member</SubmitButton>
			</CardFooter>
		</Card>
	</form>
)
