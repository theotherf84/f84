import { OrdersAddForm } from "components/orders-forms/orders-add-form"

const OrdersAdd = () => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<div className="flex flex-col sm:gap-6 sm:px-10">
				<div className="mx-auto grid flex-1 auto-rows-max gap-4">
					<OrdersAddForm />
				</div>
			</div>
		</div>
	)
}

export default OrdersAdd
