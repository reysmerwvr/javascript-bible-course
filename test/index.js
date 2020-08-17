const createButton = (title) => {
  const btn = document.createElement("button");
  let clicksQty = 0;

  btn.innerHTML = title;
  // btn.onclick = function() {
  //   console.log("Button was clicked");
  //   btn.innerHTML = `Button was clicked ${++clicksQty} times`;
  // }

  // Regular function expression
  btn.addEventListener("click", function() {
    console.log("Button was clicked");
    this.innerHTML = `Button was clicked ${++clicksQty} times`;
  });
  document.body.appendChild(btn);
};

const createDynamicList = (data) =>  {
  const list = document.getElementById("dynamic-list");
  data.map((post, index) => {
    const li = document.createElement("li");
    li.setAttribute('id', index);
    li.appendChild(document.createTextNode(post.title));
    list.appendChild(li);
  })
}

const response = getPosts()

response.then(
  data => createDynamicList(data)
)

// API Docs https://swapi.dev/documentation

// JSON schema options

// 1. https://codebeautify.org/jsonviewer/cbe9a760
// 2. https://codebeautify.org/jsonviewer/cbff0998

console.log('Good Luck Reysmer!');

const baseUrl = "https://swapi.dev/api";

const getResource = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getResponse = (films) => {
  return films.map(async (value) => {
    const { title, characters, species } = value
    const characterList = characters.slice(0, 3)
    const characterPromises = characterList.map(item => 
                                              getResource(item.replace('http', 'https')))
    const charactersData = await Promise.all(characterPromises);
    const response = { name: title, characters: charactersData };
    console.log(response);
  })
}

getResource(`${baseUrl}/films/`).then(data => {
  const { results } = data;
  const films = results.slice(0, 2);
  getResponse(films)
})