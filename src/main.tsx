import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- ADD THIS
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/emam-engineer-showcase-e6234600">
    <App />
  </BrowserRouter>
);
