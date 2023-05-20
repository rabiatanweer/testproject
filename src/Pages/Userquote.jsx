import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../styles/Quote.module.css';
import user from '../styles/Userquote.module.css';
import {AiOutlineCloseSquare} from "react-icons/ai";


export default function Userquote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();
  const[search, setSearch]= useState();
  const [inputValue, setInputValue] = useState('');
  const [myQuote, setMyQuote] = useState([]);
  const useremail= localStorage.getItem("useremail");
  const userName= localStorage.getItem(`name-${useremail}`)
  const [userData, setUserData]= useState([]);
 
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

  function addQuote() {
    
    if(inputValue===""){
       console.log("cnt be empty")
    }
    else{
      setMyQuote([...myQuote, inputValue]);
      setUserData([...myQuote, inputValue]);
      setInputValue('');
    
      let savedquotes = JSON.parse(localStorage.getItem(`${useremail}`)) || [];
      savedquotes.push(inputValue);
      localStorage.setItem(`${useremail}`, JSON.stringify(savedquotes));
      setMyQuote(savedquotes);
    }
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

 
  function searchInput(event) {
    setSearch(event.target.value);
    const searchValue = event.target.value;
    setSearch(searchValue);
   
    if (searchValue === "") {
      setUserData(myQuote);
    } else {
      const filteredData = myQuote.filter((item) => {
        return item.toLowerCase().includes(searchValue.toLowerCase());
      });
      setUserData(filteredData);
    }
  }
  function deleteQoute(index){
   const removeQuote =[...myQuote]
    removeQuote.splice(index, 1)
    console.log(removeQuote)
    setMyQuote(removeQuote)
    setUserData(removeQuote)
    localStorage.setItem( `${useremail}`, JSON.stringify(removeQuote) )
  }

  return (
    <div className={user.main}>
      <h1>Welcome "{userName}" to RandomQuoteGen: Inspire with Every Click</h1>
      <div className={user.section}>
        <div className={user.card}>
        <h1>Ramdon quotes</h1>
          <h2>"{data.text}"</h2>
          <h5>~{data.author}</h5>
          <button className={style.button} onClick={handleNextQuote}>
           Next Quote
        </button>
        </div>
        <div className={user.card}>
          <h1>User quotes</h1>
          <input type="text" placeholder="Search Quote"  value={search} onChange={searchInput} required />

          <div className={user.quotes}>
            <ul>
            {userData.map((quote , index) => (
                <li key={index}> <span className={user.span} onClick={()=>{deleteQoute(index)}}>< AiOutlineCloseSquare size={20} color='purple'/> </span> {quote } </li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>
      <div className={user.input}>
        <div className={user.inputvalue}> 
        <input 
            type="text"
            placeholder="enter quote"
            value={inputValue}
            onChange={handleInput}
          />
        </div>
          
          <button onClick={addQuote}>Add Quote</button>
        </div>
    </div>
  );
}
