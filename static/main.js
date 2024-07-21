let socket = new WebSocket('ws://localhost:8000/ws/graph/')

socket.onmessage = function (event){
    let djangoData = JSON.parse(event.data)
    console.log(djangoData)

    document.querySelector('#app').innerText = djangoData.value
}