import Hero from './component/Hero';
import Fpage from './component/Fpage';
import './App.css';
import Footer from './component/Footer';


const App = () => {
  return (
    <main>
      <div className="main">
        <div className='gradient' />
      </div>
        <div className='app'>
          <Hero />
          <Fpage />
          <Footer/>
        </div>
    </main>
  )
}

export default App