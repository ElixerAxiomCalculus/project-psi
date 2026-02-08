import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export function mountSidebar(root: Element) {
  ReactDOM.createRoot(root).render(<App />)
}
