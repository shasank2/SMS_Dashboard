import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
    isAllowed: boolean
    redirectPath: string
    children : React.ReactNode
}

const ProtectedRoute = (props: Props) => {
    const { isAllowed, redirectPath='/', children} = props
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
      }
    
      return children ? children : <Outlet />;
}

export default ProtectedRoute