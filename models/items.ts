export interface ItemData {
  name: string
  replaced: string
  due: ''
  km: 10000
}

export interface Item extends ItemData {
  id: number
}
