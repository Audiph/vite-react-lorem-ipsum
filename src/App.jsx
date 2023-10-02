import { useState } from 'react';
import ParagraphGenerator from './components/ParagraphGenerator';
import Paragraphs from './components/Paragraphs';
import text from './data';

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    const textToDisplay = text.slice(0, amount);
    // const textToDisplay = text.filter((_, index) => index < count);
    setParagraphs(textToDisplay);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <ParagraphGenerator
        handleSubmit={handleSubmit}
        setCount={setCount}
        count={count}
      />
      <Paragraphs text={paragraphs} />
    </section>
  );
};
export default App;
