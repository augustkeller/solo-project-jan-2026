import './App.css'
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Header />
        <ToDoList />
        <Footer />
      </div>
    </>
  );
}

export default App