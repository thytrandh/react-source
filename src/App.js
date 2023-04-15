import { AuthContext } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AuthContext.Provider value={{ isAuth: true }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
