import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Results from "./pages/Results";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ToDoList />} />
          <Route path="/results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
