// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.jsx';

function App() {
  return (
    <div className="App">
        <NavBar />
      <header className="App-header">
        <h1>Controla tus ventas fácilmente</h1>

         <div className="header-images">
          <img src={`${process.env.PUBLIC_URL}/images/woman.png`} alt="Mujer contenta" className="header-img" />
          <img src={`${process.env.PUBLIC_URL}/images/graphic.jpeg`} alt="Gráfica subiendo" className="header-img" />
        </div>
        <h1>Solo llenando el formulario</h1>
      </header>
      <h1>Próximamente</h1>
    </div>
  );
}

export default App;
