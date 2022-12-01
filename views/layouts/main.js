const socket = io()

socket.on('messages', data =>{
    const html = data.map(msj =>{
        return `<div>
        <p>${msj.email}</p>
        <p>${msj.date}</p>
        <p>${msj.text}</p>`
    })
    .join(" ")

    document.getElementById("messages").innerHTML = html
})

function addMessage(){
    const message = {
        email: document.getElementById("email").value,
        date: new Date().toLocaleString(),
        text: document.getElementById("text").value
    }

    socket.emit('new-message', message)
    return
}