import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * TODO: replace domain, clientId, and audience
     */
    <Auth0Provider
      domain="harakeke-2024-moa.au.auth0.com"
      clientId="yB7tbCqQhhviWfqGb4EBbGN7x41XZJg1"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://car-gp/api',
        // audience:
        //   process.env.NODE_ENV === 'development'
        //     ? 'http://localhost:3000/api'
        //     : 'https://car-gp.vercel.app/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
