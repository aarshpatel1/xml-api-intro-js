const xhr = new XMLHttpRequest()

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function () {
    console.log(this.status)
    if (this.status === 200 || this.status === 201) {
        const posts = JSON.parse(this.responseText)
        console.log(posts)
        displayPosts(posts)
    } else {
        console.log("Posts are not found")
    }
}

xhr.send()

function displayPosts(posts) {
    const displayData = document.getElementById("post-container")
    displayData.innerHTML = ""

    posts.forEach(post => {
        displayData.innerHTML += `
        <div class="card">
            <div class="content">
                <div class="header">${post.title}</div>
                <div class="description">
                    ${post.body}
                </div>
            </div>
        </div>
        `
    });
}