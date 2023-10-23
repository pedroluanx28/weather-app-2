import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../Pages/Dashboard";
import Local from "../Pages/Local";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/local/:local" Component={Local}/>
      </Routes>
    </BrowserRouter>
  )
}
