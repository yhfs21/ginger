import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Apps } from "./pages/apps/Apps";
import { Visualife } from "./pages/apps/visualife/Visualife";
import { PrivacyPolicy } from "./pages/apps/visualife/PrivacyPolicy";
import { TermsOfService } from "./pages/apps/visualife/TermsOfService";

function App() {
  return (
    <>
      <h1><a href="https://x.com/yhfs21">@yhfs21</a></h1>

      <h2><a href="/apps">Apps</a></h2>

      <Router>
        <Routes>
          <Route path="/">
            <Route path="/apps" element={<Apps />}>
              <Route path="/apps/visualife" element={<Visualife />}>
                <Route path="/apps/visualife/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/apps/visualife/terms-of-service" element={<TermsOfService />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
      {/* <a href="https://buy.stripe.com/test_6oE7sz8A2d8g3Re6oo">
        support @yhfs (stripe test)
      </a> */}
    </>
  )
}

export default App
