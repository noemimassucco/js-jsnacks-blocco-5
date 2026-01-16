const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
const authors = posts.map(nameAuthros => nameAuthros.author);
console.log(authors);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const articles = [
  { title: 'JavaScript Basics', author: 'Alice', views: 150 },
  { title: 'CSS Tricks', author: 'Bob', views: 90 },
  { title: 'HTML5 Guide', author: 'Charlie', views: 200 },
  { title: 'React Intro', author: 'Diana', views: 120 }
];

const titles = articles.map(singleTitle => singleTitle.title)
console.log(titles);


const videos = [
  { title: 'Learn JS', views: 1200 },
  { title: 'CSS Animations', views: 800 },
  { title: 'React Tutorial', views: 1500 },
  { title: 'HTML Basics', views: 400 }
];

const titles2 = videos.map(singleTitles2 => singleTitles2.title)
console.log(titles2)


const blogs = [
  { author: 'Alice', date: '2021-03-12', title: 'Learn JavaScript' },
  { author: 'Bob', date: '2020-06-30', title: 'CSS Tricks' },
  { author: 'Charlie', date: '2021-09-12', title: 'HTML Guide' },
  { author: 'Diana', date: '2022-01-15', title: 'React Intro' }
];

const author2 = blogs.map(nameauthor => nameauthor.author)
console.log(author2);