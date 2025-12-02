import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

// cosa torna document.getElementById('giangiorgio') ???
// può tornare un elemento oppure null
// per rassicurare TS che l'elemento con id "root" esiste utilizziamo
// il "non-null assertion operator" di TS, il !
// questo informa TS che ci prendiamo la responsabilità del fatto
// che quell'elemento con id "root" esista.
