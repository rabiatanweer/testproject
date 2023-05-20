
import React, { useEffect, useState } from 'react';
import style from '../styles/Quote.module.css';
import axios from 'axios';

export default function Quote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();

  useEffect(() => {
    let quoteData= JSON.parse(localStorage.getItem('quoteData'))
    if (quoteData){
      const randomIndex = Math.floor(Math.random() * quoteData.length);
      const randomQuote = quoteData[randomIndex];
      setData(randomQuote);
      console.log(quoteData, "if")
    }
    else{
    axios.get('https://type.fit/api/quotes')
        .then((res) => {
          console.log(res.data, "else")
        localStorage.setItem('quoteData', JSON.stringify(res.data));
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomQuote = res.data[randomIndex];
        setData(randomQuote);
      }) 
       
        
    }

  }, [quote]);

  const handleNextQuote = () => {
    setQuote(!quote)
  };

  return (
    <div className={style.main}>
      <h1> Welcome To Random Quotes Generator APP</h1>

      <div className={style.card}>
        <h2>" {data.text}"</h2>
        <h5> {data.author}</h5>
        <button className={style.button} onClick={handleNextQuote}>
          Next Quote
        </button>
      </div>
    </div>
  );
}

