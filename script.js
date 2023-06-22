//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// touristSpots.sort((a, b) => {
//     const articles = /^(The|A|An)\s+/i; 

//     const spotA = a.replace(articles, '');
//     const spotB = b.replace(articles, '');
  
//     return spotA.localeCompare(spotB);
//   });
// console.log(touristSpots);
  
//  const ulElement = document.getElementById('band');


// ulElement.innerHTML = '';


// touristSpots.forEach((spot) => {
//   const liElement = document.createElement('li');
//   liElement.textContent = spot;
//   ulElement.appendChild(liElement);
// });

function removeLeadingArticles(str) {
  const articles = ['The', 'A', 'An'];
  const words = str.split(' ');
  if (articles.includes(words[0])) {
    return words.slice(1).join(' ');
  }
  return str;
}

// Sort the tourist spots without leading articles
touristSpots.sort((a, b) => {
  const spotA = removeLeadingArticles(a);
  const spotB = removeLeadingArticles(b);
  return spotA.localeCompare(spotB);
});