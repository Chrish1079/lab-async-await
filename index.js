function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    
    posts.forEach(post => {
        
        const li = document.createElement('li');
        
        const h1 = document.createElement('h1');
        h1.textContent = post.title;
        
        const p = document.createElement('p');
        p.textContent = post.body;
        
        li.appendChild(h1);
        li.appendChild(p);
        
        postList.appendChild(li);
    });
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        displayPosts(posts);
    });