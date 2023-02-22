import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./Header.js";
import Footer from "./Footer.js";
// Pages
import PageHome from "./PageHome.js";
import PageLogin from "./PageLogin.js";
import PageSignUp from "./PageSignUp.js";
import PageConfirm from "./PageConfirm.js";
import PageLogout from "./PageLogout.js";
import PageReset from "./PageReset.js";
import PageProfile from "./PageProfile.js";
import PageNotFound from "./PageNotFound.js";

import { AuthProvider } from "./AuthContext.js";
import AuthRoute from "./AuthRoute.js";

function App() {

  return (
     <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" exact element={<PageHome />} />
              <Route path="/login" element={<PageLogin />} />
              <Route path="/login/:username" element={<PageLogin />} />
              <Route path="/signup" element={<PageSignUp />} />
              <Route path="/signup/confirm/:username" element={<PageConfirm />} />
              <Route path="/reset" element={<PageReset />} />
              <Route path="/logout" element={<PageLogout />} />
              <Route path="/profile" exact element={<AuthRoute><PageProfile/></AuthRoute>} />  
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App

