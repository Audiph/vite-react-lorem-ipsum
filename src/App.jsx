import { useState } from 'react';
import ParagraphGenerator from './components/ParagraphGenerator';
import Paragraphs from './components/Paragraphs';
import text from './data';

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [value, setValue] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textToDisplay = text.filter((_, index) => index < value);
    setParagraphs(textToDisplay);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <ParagraphGenerator handleSubmit={handleSubmit} setValue={setValue} />
      <Paragraphs text={paragraphs} />
    </section>
  );
};
export default App;
