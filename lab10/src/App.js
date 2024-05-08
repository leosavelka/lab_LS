import ToDo from './components/ToDo';
import f3 from './img/f3.png';
import f4 from './img/f4.png';
import f5 from './img/f5.png';
import './App.css';

function App() {
  return (
    <div className="container">
    <h2 className="first_title">Что Вам необходимо?</h2>
    <div className="first_block">
        <ToDo title="Первый блок" img={f3} text='Текст, текст, текст, текст, текст, текст'/>
        <ToDo title="Второй блок" img={f4} text='Текст, текст, текст, текст, текст, текст'/>
        <ToDo title="Третий блок" img={f5} text='Текст, текст, текст, текст, текст, текст'/>
    </div>
 </div> 
  );
}

export default App;