
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Quizzes from "./components/Quizzes/Quizzes";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'><Quizzes/></div>
      <Footer/>
    </div>
  );
}

export default App;
