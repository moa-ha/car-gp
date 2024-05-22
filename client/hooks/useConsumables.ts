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
    queryKey: ['consumable'],
    queryFn: () => api.getConsumableById(id),
  })
}

export function useAddConsumable() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (consumable: ConsumableData) => api.addConsumable(consumable),
    onSuccess: () => client.invalidateQueries({ queryKey: ['newConsumable'] }),
  })
}

export function useDeleteConsumable() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => api.deleteConsumable(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['delConsumable'] }),
  })
}

//needs function review
export function useEditKm() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (Consumable: Consumable) => api.editKm(Consumable),
    onSuccess: () => client.invalidateQueries({ queryKey: ['editConsumable'] }),
  })
}
