import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reduxContainer/store";
import HomePage from "./components/homepage/HomePage";
import Popup from "./components/popup/Popup";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course-details/:id" element={<Popup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
