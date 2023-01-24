import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from 'shared/config/routeConfig/routeConfig'

function AppRouter() {
  return (
    <Suspense fallback={<div className='page-wrapper'>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => {
          return (<Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}/>)
        })}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
