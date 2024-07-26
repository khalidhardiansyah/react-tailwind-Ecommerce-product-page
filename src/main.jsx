import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContextProvider from './context/ProductContext.jsx'
import { ListCartProvider } from './context/ProductContextDispatch.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
<ListCartProvider>
  <App/>
</ListCartProvider>
    </ProductContextProvider>
  </React.StrictMode>,
)
