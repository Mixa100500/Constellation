import { Header } from "./components/Layout/Header"
import Router from './сompositions/Router'

function App() {
	return (
		<div className='ContainerApp'>
			<Header/>
			<main>
				<Router />
			</main>	
		</div>
	)
}

export default App
