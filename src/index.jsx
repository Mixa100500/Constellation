import ReactDOM from 'react-dom/client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './reset.css'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
)
