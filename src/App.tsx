import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivacyPolicy } from "./pages/apps/visualife/PrivacyPolicy";
import { TermsOfService } from "./pages/apps/visualife/TermsOfService";

function App() {
  return (
    <>
      <h1>Visualife</h1>
      <a href="/apps/visualife/privacy-policy">プライバシーポリシー</a>
      <br />
      <a href="/apps/visualife/terms-of-service">利用規約</a>
      <br />
      <Router>
        <Routes>
          <Route path="/apps/visualife/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/apps/visualife/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
      {/* <a href="https://buy.stripe.com/test_6oE7sz8A2d8g3Re6oo">
        support @yhfs (stripe test)
      </a> */}
    </>
  )
}

export default App
