export interface ConsumableData {
  name: string
  replaced: string
  due: string
  km: 10000
}

export interface Consumable extends ConsumableData {
  id: number
}
