import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/darkMode.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { ProfileContextProvider } from "./context/profileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileContextProvider>
    <DarkModeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
