import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Layout from "./layout/WebsiteLayout/Layout"
import NotFound from "./pages/NotFound/NotFound"
import Users from "./pages/Users/Users"
import UserProfile from "./pages/UserProfile/UserProfile"

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserProfile />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
