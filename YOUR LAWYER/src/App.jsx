import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ConstitutionLaw from './components/ConstitutionLaw.jsx';
import StatutoryLaw from './components/StatutoryLaw.jsx'
import AdministrativeLaw from './components/AdministrativeLaw.jsx';
import Chatbot from './components/AILawAssistant.jsx';
import LegalRightsAwareness from './components/LegalRightsAwareness.jsx';


import { Routes, Route } from "react-router-dom";
import WomensLaw from './components/WomensLaw.jsx';


function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <LoginPage />}
      />
      <Route
        path="/ConstitutionLaw"
        element={<ConstitutionLaw />}
      />
      <Route
        path="/StatutoryLaw"
        element={<StatutoryLaw />}
      />
      <Route
        path="/AdministrativeLaw"
        element={<AdministrativeLaw />}
      />
      <Route
        path="/WomensLaw"
        element={<WomensLaw />}
      />
      <Route
        path="/ChatBot"
        element={<Chatbot />}
      />
      <Route
        path="/LegalRightsAwareness"
        element={<LegalRightsAwareness />}
      />
      <Route
        path="/ChatBot"
        element={<Chatbot />}
      />
      <Route
        path="/ChatBot"
        element={<Chatbot />}
      />


    </Routes>
  );
}


function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
