
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//aca se importan los modulos---> ver pagina "https://www.freecodecamp.org/news/react-router-in-5-minutes"

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
