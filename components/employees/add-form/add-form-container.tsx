import { AddEmployeeForm } from "components/employees/add-form/add-form"
import { getTranslations } from "helpers/get-translations"

export const AddEmployeeFormContainer = async () => {
	const { forms, inputs } = await getTranslations()

	return <AddEmployeeForm messages={{ forms, inputs }} />
}
