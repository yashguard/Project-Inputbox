import { useRef } from 'react';
import './App.css';

function App() {
  let data = useRef()
  const focus = (e) => {
    console.log(data.current.value)
    e.preventDefault()
    data.current.value = "";
    data.current.focus()
  }
  return (
    <section>
      <form onSubmit={focus}>
        <input type="text" ref={data} />
        <input id='click' type="submit" value="ClickToFocus" />
      </form>
    </section>
  );
}

export default App;
