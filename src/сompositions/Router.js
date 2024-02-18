import { Route, Routes } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Watch from '../components/Pages/Watch/Watch'
import Collection from "../components/Pages/Collection/Collection"
export const collections = [
	{ name: 'movies' },
	{ name: 'serials' },
	{ name: 'cartoons' },
]

export const collectionsNames = {
	movies: 'movies',
	serials: 'serials',
	cartoons: 'cartoons',
}

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/popular'>
          {collections.map((c) => {
            return (
              <Route
                key={c.name}
                path=':type'
                element={<Collection />}
              />
            )
          })}
        </Route>
        <Route path='/watch'>
          <Route
            path='serial/:id'
            element={<Watch IsMovie={false} />}
          />
          <Route
            path='movie/:id'
            element={<Watch IsMovie={true} />}
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

export default Router;