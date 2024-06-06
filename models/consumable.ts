export interface ConsumableData {
  name: string
  replaced: string
  due: string
  km: number
}

export interface ConsumableUser extends ConsumableData {
  user: string
}
export interface Consumable extends ConsumableUser {
  id: number
}
