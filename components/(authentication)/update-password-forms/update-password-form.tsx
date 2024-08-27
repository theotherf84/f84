import { action } from "actions/update-password"
import { SubmitButton } from "components/submit-button"
import { Siren } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "shadcn/alert"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"

export const UpdatePasswordForm = ({ error }: { error: string }) => {
	return (
		<div className="flex h-full items-center justify-center">
			<div className="mx-auto grid w-1/2 gap-6">
				<div className="grid gap-2 text-left">
					<h1 className="text-3xl font-bold">Update password</h1>
					<p className="text-muted-foreground">Enter your new password</p>
				</div>
				<form action={action} className="grid gap-4">
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
						</div>
						<Input id="password" name="password" type="password" required />
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password-confirmation">Password confirmation</Label>
						</div>
						<Input id="password-confirmation" name="password-confirmation" type="password" required />
					</div>
					<SubmitButton>Update password</SubmitButton>
					{error && (
						<Alert>
							<Siren className="h-4 w-4" />
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}
				</form>
			</div>
		</div>
	)
}
