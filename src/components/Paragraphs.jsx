import React from 'react';

const Paragraphs = ({ text }) => {
  return (
    <article className="lorem-text">
      {text.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </article>
  );
};

export default Paragraphs;
