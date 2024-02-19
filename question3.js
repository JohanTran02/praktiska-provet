// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

        if (!response.ok) {
            throw new Error("Network issues");
        }

        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e);
    }
}

const posts = await fetchPosts();

function renderData() {
    const postsContainer = document.querySelector("#posts");
    postsContainer.innerHTML += posts.filter(user => user.userId === 1).map(post => {
        return `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `
    }).join("");
}

renderData()

console.log(posts);
