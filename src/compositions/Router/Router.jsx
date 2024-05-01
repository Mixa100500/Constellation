import { Route, Routes } from 'react-router-dom'
import Home from '../../components/Pages/Home/Home'
import Watch from '../../components/Pages/Watch/Watch'
import Collection from "../../components/Pages/Collection/Collection"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/popular'>
          <Route
            path=':type'
            element={<Collection />}
          />
        </Route>

        <Route path='/watch'>
          <Route
            path=':type/:id'
            element={<Watch isMovie={false} />}
          />
          <Route
            path=':type/:id'
            element={<Watch isMovie={true} />}
          />
        </Route>
      </Routes>
      {/* <Route path='/new/book' element={<NewBook setError={notify}/>} />
      <Route path='/login' element={
        <LoginForm setError={notify} setToken={setToken}/>
      } />
      <Route path='/recommend' element={<Recommend />} /> */}
    </>
  )
}
