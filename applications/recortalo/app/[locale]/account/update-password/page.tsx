import { UpdatePasswordForm } from "components/(authentication)/update-password-forms/update-password-form"

const Page = ({
	searchParams: { error },
}: {
	searchParams: { error: string }
}) => (
	<div className="h-screen container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
		<UpdatePasswordForm error={error} />
	</div>
)

export default Page
