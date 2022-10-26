let form = document.querySelector('.form')
let btn = document.querySelector('.btn')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/person', {
        method: "POST",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify({
            name: e.target[0].value,
            LastName: e.target[1].value,
        })
    }).then((res) => console.log(res) )
    .catch((err) => console.log(err))

})

