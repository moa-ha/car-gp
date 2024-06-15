import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/maintenance'
import { useAuth0 } from '@auth0/auth0-react'
import { Consumable } from '../../models/consumable'
import { Wof } from '../../models/maintenance'

export function useMaintenance() {
  const query = useQuery({
    queryKey: ['maintenance'],
    queryFn: api.getMaintenance,
  })
  return {
    ...query,
  }
}

export function useUpdateWof() {
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (wof: Wof) => {
      const token = await getAccessTokenSilently()
      return api.updateWof({ wof, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['maintenance'] }),
  })
}
