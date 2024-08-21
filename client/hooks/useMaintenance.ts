import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/maintenance'
import { useAuth0 } from '@auth0/auth0-react'
import { Rego, Wof, Km } from '../../models/maintenance'

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

export function useUpdateRego() {
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (rego: Rego) => {
      const token = await getAccessTokenSilently()
      return api.updateRego({ rego, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['maintenance'] }),
  })
}

export function useUpdateKm() {
  const { getAccessTokenSilently } = useAuth0()
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (averageKm: Km) => {
      const token = await getAccessTokenSilently()
      return api.updateKm({ averageKm, token })
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['maintenance'] }),
  })
}
