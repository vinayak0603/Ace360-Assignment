// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import { AuthProvider } from "./contexts/AuthContext"; // adjust path if needed

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
