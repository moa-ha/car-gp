// figure out why it render all the functions twice - can see when console.log
import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
  UseQueryResult,
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
  const { getAccessTokenSilently } = useAuth0()

  const query = useQuery<Consumable[], Error>({
    queryKey: ['consumables'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return api.getConsumables(token)
    },
  })

  return {
    ...query,
  }
}

export function useGetConsumableById(
  id: number,
): UseQueryResult<Consumable, Error> {
  const { getAccessTokenSilently } = useAuth0()

  return useQuery<Consumable, Error>({
    queryKey: ['consumable', id],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return api.getConsumableById(token, id) // Ensure this returns a single Consumable, not an array
    },
  })
}

export function useAddConsumable() {
  const { getAccessTokenSilently, user } = useAuth0()
  const client = useQueryClient()
  return useMutation({
    mutationFn: async (consumable: ConsumableData) => {
      const token = await getAccessTokenSilently()
      console.log(user?.sub)

      return api.addConsumable({ consumable, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

export function useDeleteConsumable() {
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const token = await getAccessTokenSilently()
      return api.deleteConsumable({ id, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

//needs function review
export function useEdit() {
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (data: Consumable) => {
      const token = await getAccessTokenSilently()
      console.log(token)

      return api.editConsumable({ data, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
