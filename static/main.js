let ctx = document.querySelector('#chart')

let graphData = {
    type: 'line', data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], datasets: [{
            label: 'Simple Dynamic Graph',
            data: [0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: 'rgb(75,192,192)',
            tension: 0.1
        }]
    }
}

let chart = new Chart(ctx, graphData)


let socket = new WebSocket('ws://localhost:8000/ws/graph/')

socket.onmessage = function (event) {
    let djangoData = JSON.parse(event.data)
    document.querySelector('#app').innerText = djangoData.value

    let newGraphData = graphData.data.datasets[0].data
    newGraphData.shift()
    newGraphData.push(djangoData.value)
    graphData.data.datasets[0].data = newGraphData

    let newGraphLabels = graphData.data.labels
    newGraphLabels.shift()
    newGraphLabels.push(djangoData.day)
    graphData.data.labels = newGraphLabels
    chart.update()
}