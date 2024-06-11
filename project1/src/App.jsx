import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './quotecard';
import QuoteList from './quotelist';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1>Random Ron Swanson Quote</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote}>Get New Quote</button>
      <QuoteList quotes={savedQuotes} />
    </div>
  );
};

export default App;
