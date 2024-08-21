// for guest page

import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/guest'

export function useGuestConsumables() {
  return useQuery({
    queryKey: ['guestConsumable'],
    queryFn: () => api.guestConsumables(),
  })
}
