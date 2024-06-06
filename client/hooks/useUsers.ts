import {
  useQueryClient,
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query'
import { addUser, getUsers } from '../apis/user'
import { User } from '../../models/user'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}

export function useAddUser(): UseMutationResult<void, Error, User, unknown> {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (user: User) => {
      await addUser(user)
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['users'] }),
  })
}
