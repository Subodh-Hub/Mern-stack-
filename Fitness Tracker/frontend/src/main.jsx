import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
