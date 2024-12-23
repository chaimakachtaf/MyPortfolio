import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // Importez les styles Tailwind ici
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Optionnel : Collecte des métriques de performance
reportWebVitals(console.log);
