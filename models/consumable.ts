export interface ConsumableData {
  name: string
  replaced: string
  due: ''
  km: 10000
}

export interface Consumable extends ConsumableData {
  id: number
}
