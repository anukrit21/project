import React from 'react';

const QuoteList = ({ quotes }) => {
  return (
    <div className="quote-list">
      <h2>Saved Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="saved-quote">
          {quote}
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
