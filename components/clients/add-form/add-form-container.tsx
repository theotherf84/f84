import { AddClientForm } from "components/clients/add-form/add-form"
import { getTranslations } from "helpers/get-translations"

export const AddClientFormContainer = async () => {
	const { forms, inputs } = await getTranslations()

	return <AddClientForm messages={{ forms, inputs }} {...{ forms, inputs }} />
}
