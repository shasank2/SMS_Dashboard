import SideBar from './SideBar'
import TopNavigationBar from './TopNavigationBar'
import { Outlet } from 'react-router-dom'

type Props = {
  // children: React.ReactNode
}

const ProtectedLayout = (props: Props) => {
  // const { children } = props
  return (
    <div className="flex h-screen">
      <div className="bg-dark-3 w-[220px]">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="bg-dark-4 px-8">
          <TopNavigationBar />
        </div>
        <div className="flex-grow p-8 overflow-y-auto">
          <Outlet/>
          {/* {children} */}
        </div>
      </div>
    </div>
  )
}

export default ProtectedLayout