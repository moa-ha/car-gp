import {
  useQueryClient,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query'
import { addUser } from '../apis/user'
import { User } from '../../models/user'

export function useAddUser(): UseMutationResult<void, Error, User, unknown> {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (user: User) => {
      await addUser(user)
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['users'] }),
  })
}
