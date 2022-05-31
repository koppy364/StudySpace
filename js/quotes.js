const quotes = [
  {
    quote : "You cannot change what you ar, only what yo do.",
    author : "Philip Pullman",
  },
  {
    quote : "Lay a firm foundation with the bricks that others throw at you.",
    author : "David Brinkley",
  },
  {
    quote : "Change the way you look at things and the things you look at change.",
    author : "Wayne Dyer",
  },
  {
    quote : "If you run you stand a chance of losing, but if you don't run you've already lost.",
    author : "Barack Obama",
  },
  {
    quote : "If you have always done it that way, it is probably wrong.",
    author : "Charles Kettering",
  },
  {
    quote : "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author : "Elbert Hubbard",
  },
  {
    quote : "Not evertthing that is faced can be changed, but nothing can be changed until itis faced.",
    author : "James Baldwin",
  },
  {
    quote : "If work were so pleasantm the rich would keep it for themselves.",
    author : "Mark Twain",
  },
  {
    quote : "I cannot say whether things will get better if we change, what I can say is thery must change if they are to get better.",
    author : "Georg C. Lichtenberg",
  },
  {
    quote : "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
    author : "Socrates."
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaaysQuote = quotes[Math.floor((Math.random() * quotes.length))];
console.log(`quote:${Math.floor((Math.random() * quotes.length))}`);
quote.innerText = todaaysQuote.quote;
author.innerText = todaaysQuote.author;

