export interface ConsumableData {
  name: string
  replaced: string
  due: string
  km: number
  user: string
}

export interface Consumable extends ConsumableData {
  id: number
}
