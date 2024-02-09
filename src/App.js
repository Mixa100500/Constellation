import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './components/Page/Home'
import Watch from './components/Page/Watch'
import Collection from './components/Page/Collection/Collection'

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

function App() {
	return (
		<div className='ContainerApp'>
			<Header dark={true} />
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
						element={<Watch movie={false} />}
					/>
					<Route
						path='movie/:id'
						element={<Watch movie={true} />}
					/>
				</Route>
			</Routes>
			{/* <Route path='/new/book' element={<NewBook setError={notify}/>} />
          <Route path='/login' element={
            <LoginForm setError={notify} setToken={setToken}/>
          } />
          <Route path='/recommend' element={<Recommend />} /> */}
			{/* <Footer /> */}
		</div>
	)
}

export default App
