// figure out why it render all the functions twice - can see when console.log
import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import * as api from '../apis/consumables'
import { Consumable, ConsumableData } from '../../models/consumable'
import { useAuth0 } from '@auth0/auth0-react'

export function useConsumablesMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consumables'] })
    },
  })

  return mutation
}

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
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const token = await getAccessTokenSilently()
      console.log(token)
      return api.deleteConsumable({ id, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

//needs function review
export function useEdit() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (Consumable: Consumable) => api.edit(Consumable),
    onSuccess: () => client.invalidateQueries({ queryKey: ['editConsumable'] }),
  })
}
