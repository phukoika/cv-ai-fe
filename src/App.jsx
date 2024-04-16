import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/users/login" element={<LoginPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
