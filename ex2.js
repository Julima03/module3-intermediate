console.log(truncate('This text will be truncated if it is too long', 25));

function truncate(sentence, max) {
  if (sentence.length > max) {
    console.log(sentence.slice(0, 25));
  }
  return sentence.length;  
}


// // Item B

console.log(truncate('This text will be truncated if it is too long', 25));
console.log(truncate('This text is not truncated', 30));

function truncate(sentence, max) {
    if (sentence.lenght, max) {
  return  `${sentence.slice(0, max)}...`;
}
return sentence;
}
