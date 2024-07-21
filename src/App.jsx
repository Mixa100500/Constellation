import { Header } from "./components/Layout/Header.jsx"
import { Router } from './compositions/Router/Router.jsx'
import { HeaderManagerProvider } from './context/HeaderManagerProvider.jsx'
function App() {
	
	return (
		<div className='containerApp'>
			<HeaderManagerProvider>
				<Header/>
			</HeaderManagerProvider>
			<main>
				<Router />
			</main>	
		</div>
	)
}

export default App
