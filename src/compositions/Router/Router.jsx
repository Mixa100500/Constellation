import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../../pages/Home/HomeScreen.jsx'
import { CollectionScreen } from '../../pages/Collection/CollectionScreen.jsx'
import { WatchScreen } from '../../pages/Watch/WatchScreen.jsx'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />
        <Route
          path='/popular/:type'
          element={<CollectionScreen />}
        />
        <Route path='/watch/:type/:id'
          element={<WatchScreen />}
        />
      </Routes>
      {/* <Route path='/new/book' element={<NewBook setError={notify}/>} />
      <Route path='/login' element={
        <LoginForm setError={notify} setToken={setToken}/>
      } />
      <Route path='/recommend' element={<Recommend />} /> */}
    </>
  )
}
