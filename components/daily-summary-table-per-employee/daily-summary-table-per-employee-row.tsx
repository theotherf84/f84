import { getFormattedCurrencyAmount } from "helpers/get-formatted-currency-amount"
import { getFormattedNameInitial } from "helpers/get-formatted-name-initial"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import { TableCell, TableRow } from "shadcn/table"

export const DailySummaryTablePerEmployeeRow = ({ amount, employee }: any) => (
	<TableRow>
		<TableCell>
			<Avatar>
				<AvatarFallback>
					{getFormattedNameInitial(employee?.first_name)}
					{getFormattedNameInitial(employee?.last_name)}
				</AvatarFallback>
			</Avatar>
		</TableCell>
		<TableCell className="text-right">{getFormattedCurrencyAmount(amount)}</TableCell>
	</TableRow>
)
