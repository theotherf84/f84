import type { TableName } from "enumerations/table-name"
import type { Tables } from "types/database.types"

export type Category = Tables<TableName.Categories>

export type Client = Tables<TableName.Clients>

export type Order = Tables<TableName.Orders>

export type OrderWithEmployee = Omit<Order, "employee"> & { employee: Employee }

export type Subcategory = Tables<TableName.Subcategories>

export type Employee = Tables<TableName.Employees>
