import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/maintenance'
import { useAuth0 } from '@auth0/auth0-react'
import { Wof } from '../../models/maintenance'

export function useMaintenance() {
  const { getAccessTokenSilently } = useAuth0()

  const query = useQuery({
    queryKey: ['maintenance'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()

      return api.getMaintenance(token)
    },
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
