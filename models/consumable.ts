export interface ConsumableData {
  name: string
  replaced: string
  due: string
  km: number
}

export interface Consumable extends ConsumableData {
  id: number
}
