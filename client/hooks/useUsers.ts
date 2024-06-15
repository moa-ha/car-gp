import {
  useQueryClient,
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query'
import { getUserById, getUsers, newUser } from '../apis/user'
import { User } from '../../models/user'
import { useAuth0 } from '@auth0/auth0-react'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}

export function useUserById() {
  const { user } = useAuth0()
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const id = String(user?.sub)
      return getUserById(id)
    },
  })
}

export function useNewUser(): UseMutationResult<void, Error, User, unknown> {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (user: User) => {
      const existingUser = await getUserById(user.id)
      if (!existingUser) {
        await newUser(user)
      } else {
        console.log('existing user: ' + user.id)
      }
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['users'] }),
  })
}
