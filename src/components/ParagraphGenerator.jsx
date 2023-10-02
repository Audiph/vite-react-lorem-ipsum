import React from 'react';

const ParagraphGenerator = ({ count, handleSubmit, setCount }) => {
  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        min={1}
        step={1}
        max={9}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button className="btn" type="submit">
        generate
      </button>
    </form>
  );
};

export default ParagraphGenerator;
