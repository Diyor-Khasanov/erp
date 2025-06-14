// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Auth/Login";
// import Boshqa sahifalar...

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Boshqa sahifalar */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
