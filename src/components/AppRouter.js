import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { routes } from '../routes/routes'
import {HOME_PATH} from '../utils/consts'

function AppRouter() {
  return (
      <Routes>
          {routes.map(({path, element}) =>
            <Route key={path} path={path} element={element}></Route>
          )}
        <Route path='*' element={<Navigate to={HOME_PATH}/>}></Route>
      </Routes>
  )
}

export default AppRouter