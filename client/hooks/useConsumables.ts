// figure out why it render all the functions twice - can see when console.log
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../apis/consumables'
import { Consumable, ConsumableData } from '../../models/consumable'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['consumables'],
    queryFn: api.getConsumables,
  })
  return {
    ...query,
  }
}

export function useGetConsumableById(id: number) {
  return useQuery({
    queryKey: ['consumable', id],
    queryFn: () => api.getConsumableById(id),
  })
}
export function useAddConsumable() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (consumable: ConsumableData) => api.addConsumable(consumable),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
export function useDeleteConsumable() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => api.deleteConsumable(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

//needs function review
export function useEditMileage() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (Consumable: Consumable) => api.editMileage(Consumable),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
