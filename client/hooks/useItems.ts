// figure out why it render all the functions twice - can see when console.log
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../apis/items'
import { Item, ItemData } from '../../models/items'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['consumables'],
    queryFn: api.getItems,
  })
  return {
    ...query,
  }
}

export function useGetItemById(id: number) {
  return useQuery({
    queryKey: ['consumable', id],
    queryFn: () => api.getItemById(id),
  })
}
export function useAddItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (item: ItemData) => api.addItem(item),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
export function useDeleteItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => api.deleteItem(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

//needs function review
export function useEditMileage() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (item: Item) => api.editMileage(item),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
