import { Route, Routes } from 'react-router-dom'
// import { CollectionScreen } from '../../components/Pages/Collection/CollectionScreen'
import { HomeScreen } from '../../components/Pages/Home/HomeScreen'
// import { WatchScreen } from '../../components/Pages/Watch/WatchScreen'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />
        {/* <Route path='/popular'>
          <Route
            path=':type'
            element={<CollectionScreen />}
          />
        </Route>

        <Route path='/watch'>
          <Route
            path=':type/:id'
            element={<WatchScreen />}
          />
        </Route> */}
      </Routes>
      {/* <Route path='/new/book' element={<NewBook setError={notify}/>} />
      <Route path='/login' element={
        <LoginForm setError={notify} setToken={setToken}/>
      } />
      <Route path='/recommend' element={<Recommend />} /> */}
    </>
  )
}
