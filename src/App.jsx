import { Header } from "./components/Layout/Header.jsx"
import { Router } from './compositions/Router/Router.jsx'

function App() {
	
	return (
		<div className='containerApp'>
			<Header/>
			<main>
				<Router />
			</main>	
		</div>
	)
}

export default App
