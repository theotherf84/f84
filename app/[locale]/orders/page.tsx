import { OrdersDataTableContainer } from "components/(orders)/orders-data-table/orders-data-table-container"
import { QuickAddOrderFormContainer } from "components/(orders)/orders-quick-add-form/orders-quick-add-form-container"
import { ActionCard } from "components/action-card"

const Page = () => (
	<div className="md:container md:mx-auto p-6">
		<div className="grid col-span-3 md:col-span-2 gap-6">
			<div className="flex flex-col md:flex-row gap-4">
				<ActionCard
					disabled
					messages={{
						action: "Crear nueva venta",
						subtitle: "Presentamos nuestro panel de ventas dinámico para una gestión perfecta y un análisis detallado.",
						title: "Tus ventas",
					}}
					pathname="/orders/add"
				>
					<QuickAddOrderFormContainer />
				</ActionCard>
				<ActionCard
					messages={{ action: "Ver reporte", subtitle: "Un reporte diario de ventas por empleado.", title: "Reporte del dia" }}
					pathname="/orders/employees"
				/>
			</div>
			<OrdersDataTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
