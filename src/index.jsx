import { createRoot } from 'react-dom/client'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = createRoot(document.querySelector("#root")); // informações do index.html

root.render(<App />);