// Example 1: Get a single user
const getUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const user = await response.json();

    console.log("User:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
    console.log();
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

// Example 2: Get all posts
const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  // Get the container:
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    console.log(`[${post.id}] ${post.title}`);

    // Create HTML element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;

    // Add li into container
    postContainer.appendChild(postCard);
  });
  console.log();
};

// Example 3: Create new post
const createPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "My Post",
      body: "This is my post content",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((post) => {
      console.log("Created:", post);
      console.log();
    });
};

// Asyncous function

getPosts();
