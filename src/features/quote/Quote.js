import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuote } from "./quoteSlice";
import "./Quotes.css";
import QuotesAPI from "./quoteAPI";

const Quotes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  let quoteSize = QuotesAPI.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomData = QuotesAPI[randomIndex];

  return (
    <footer className="Quotes-container">
      <p id="quote-content">"{randomData.quote}"</p>
      <p id="quote-author">{randomData.author}</p>
    </footer>
  );
};

export default Quotes;
