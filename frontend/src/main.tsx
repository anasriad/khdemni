import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { Provider } from "react-redux";
import { Store } from "../src/states/store.ts";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      {/*adding containers in which all the pages & components will use */}
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
)
