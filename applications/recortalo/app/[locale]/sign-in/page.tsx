import { LoginBlockquote } from "components/(authentication)/sign-in-blockquote"
import { SignInForm } from "components/(authentication)/sign-in-form/sign-in-form"
import { Scissors } from "lucide-react"
import Link from "next/link"

const Page = ({
	searchParams: { error, success },
}: {
	searchParams: { error: string; success: string }
}) => (
	<div className="h-screen container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
		<SignInForm error={error} success={success} />
		<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
			<div className="absolute inset-0 bg-zinc-900" />
			<div className="relative z-20 flex items-center text-lg font-medium">
				<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
					<Scissors className="h-6 w-6" />
					<span>Recortalo</span>
				</Link>
			</div>
			<div className="relative z-20 mt-auto">{false && <LoginBlockquote />}</div>
		</div>
	</div>
)

export default Page
