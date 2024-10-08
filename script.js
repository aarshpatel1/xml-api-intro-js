const fetchButton = document.getElementById("fetch-data")

fetchButton.addEventListener("click", () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true)

    xhr.onload = function () {
        console.log(this.status)
        if (this.status === 200 || this.status === 201) {
            const users = JSON.parse(this.responseText)
            console.log(users)
            displayUsers(users)
        } else {
            console.log("Users are not found.")
        }
    }

    xhr.send()
})


function displayUsers(users) {
    const displayData = document.getElementById("display-data")
    displayData.innerHTML = ""
    
    users.forEach((user) => {
        displayData.innerHTML += `
         <details>
            <summary>${user.name}</summary>
            <p>${user.username}</p>
        </details>
        `
    });
}