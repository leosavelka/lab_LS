import f3 from './img/f3.png';
import f4 from './img/f4.png';
import f5 from './img/f5.png';
import './App.css';

function App() {
  return (
  <main class="main">
    <div class="container">
        <h2 class="main_title">Что Вам необходимо?</h2>
        <div class="main_block">
            <div class="blocks">
                <img src={f3} alt="pic"/>
                <h3>Первый блок</h3>
                <p>Текст, текст, текст, текст, текст, текст</p>
            </div>
            <div class="blocks">
                <img src={f4} alt="pic"/>
                <h3>Второй блок</h3>
                <p>Текст, текст, текст, текст, текст, текст</p>
            </div>
            <div class="blocks">
                <img src={f5} alt="pic"/>
                <h3>Третий блок</h3>
                <p>Текст, текст, текст, текст, текст, текст</p>
            </div>
        </div>
    </div>
</main>
  );
}

export default App;
