import { action } from "actions/update-password"
import { SubmitButton } from "components/submit-button"
import { getTranslations } from "helpers/get-translations"
import { Siren } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "shadcn/alert"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"

export const UpdatePasswordForm = async ({ error }: { error: string }) => {
	const { forms } = await getTranslations()

	return (
		<div className="flex h-full items-center justify-center">
			<div className="mx-auto grid w-1/2 gap-6">
				<div className="grid gap-2 text-left">
					<h1 className="text-3xl font-bold">{forms.updatePassword.title}</h1>
					<p className="text-muted-foreground">{forms.updatePassword.subtitle}</p>
				</div>
				<form action={action} className="grid gap-4">
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">{forms.updatePassword.passwordInput}</Label>
						</div>
						<Input id="password" name="password" type="password" required />
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password-confirmation">{forms.updatePassword.confirmPasswordInput}</Label>
						</div>
						<Input id="password-confirmation" name="password-confirmation" type="password" required />
					</div>
					<SubmitButton>{forms.updatePassword.submitButton}</SubmitButton>
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