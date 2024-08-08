import type { Tables } from "types/database.types"
import type { TableName } from "enumerations/table-name"

export type Category = Tables<TableName.Categories>

export type Order = Tables<TableName.Orders>

export type Subcategory = Tables<TableName.Subcategories>

export type Employee = Tables<TableName.Employees>
