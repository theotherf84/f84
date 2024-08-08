export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
	public: {
		Tables: {
			categories: {
				Row: {
					created_at: string
					id: number
					name: string
				}
				Insert: {
					created_at?: string
					id?: number
					name: string
				}
				Update: {
					created_at?: string
					id?: number
					name?: string
				}
				Relationships: []
			}
			employees: {
				Row: {
					created_at: string
					first_name: string
					id: number
					last_name: string | null
				}
				Insert: {
					created_at?: string
					first_name: string
					id?: number
					last_name?: string | null
				}
				Update: {
					created_at?: string
					first_name?: string
					id?: number
					last_name?: string | null
				}
				Relationships: []
			}
			orders: {
				Row: {
					category: string
					cost: number
					created_at: string
					id: number
					status: string
					subcategory: string | null
					user: string | null
				}
				Insert: {
					category: string
					cost: number
					created_at?: string
					id?: number
					status: string
					subcategory?: string | null
					user?: string | null
				}
				Update: {
					category?: string
					cost?: number
					created_at?: string
					id?: number
					status?: string
					subcategory?: string | null
					user?: string | null
				}
				Relationships: [
					{
						foreignKeyName: "Orders_user_fkey"
						columns: ["user"]
						isOneToOne: false
						referencedRelation: "users"
						referencedColumns: ["id"]
					},
				]
			}
			subcategories: {
				Row: {
					category: number | null
					created_at: string
					id: number
					name: string
				}
				Insert: {
					category?: number | null
					created_at?: string
					id?: number
					name: string
				}
				Update: {
					category?: number | null
					created_at?: string
					id?: number
					name?: string
				}
				Relationships: [
					{
						foreignKeyName: "subcategories_category_fkey"
						columns: ["category"]
						isOneToOne: false
						referencedRelation: "categories"
						referencedColumns: ["id"]
					},
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
	PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R
			}
			? R
			: never
		: never

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I
			}
			? I
			: never
		: never

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U
			}
			? U
			: never
		: never

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"] : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never
