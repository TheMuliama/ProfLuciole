function loadBlogPosts() {
    fetch('posts/index.json')
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById('blog-posts');
            posts.forEach(post => {
                loadMarkdownContent(`posts/${post.file}`, post.title, blogContainer);
            });
        });
}

function loadMarkdownContent(filePath, title, container) {
    fetch(filePath)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            const postElement = document.createElement('div');
            postElement.className = 'parchment';
            postElement.innerHTML = `<h2>${title}</h2>${html}`;
            container.appendChild(postElement);
        });
}
