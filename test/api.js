async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};