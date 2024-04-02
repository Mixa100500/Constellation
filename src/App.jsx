import { Header } from "./components/Layout/Header"
import Router from './сompositions/Router'

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
