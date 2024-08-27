import { UpdatePasswordForm } from "components/(authentication)/update-password-forms/update-password-form"

const Page = ({
	searchParams: { error },
}: {
	searchParams: { error: string }
}) => (
	<div className="grid grid-cols-2 h-screen">
		<div className="columns-1">
			<UpdatePasswordForm error={error} />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
