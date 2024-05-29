import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/maintenance'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['maintenance'],
    queryFn: api.getMaintenance,
  })
  return {
    ...query,
  }
}
