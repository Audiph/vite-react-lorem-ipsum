import React from 'react';

const Paragraphs = ({ text }) => {
  return (
    <article className="lorem-text">
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  );
};

export default Paragraphs;
