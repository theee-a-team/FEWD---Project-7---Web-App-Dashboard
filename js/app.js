// Alert Banner

const alertBanner = document.getElementById("alert");
const nDot =  document.getElementById("notifications");

alertBanner.innerHTML = 
`<div class="alert-banner" style="font-size: small"><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><button class="alert-banner-close"><strong>X</strong></button>
</div>`

alertBanner.parentNode.addEventListener('click', e => {
    const element = e.target;
    if (element.textContent === "X") {
    alertBanner.style.display = "none"
    nDot.style.display = "none"
    }
});

// Traffic Chart

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    maintainAspectRatio: false,
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
        beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily Traffic Chart

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
};

const dailyOptions = {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Users Pie Chart

const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
            boxWidth: 20,
            fontStyle: 'bold',
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// Messaging Widget

const submit = document.getElementById("send");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");

document.addEventListener('click', e => {
    const element = e.target;
    if (element.textContent === "Send") {
            if (user.value === "" && message.value === "" ) {
                e.preventDefault();
                alert('Please fill out User and Message fields before sending');
                user.style.border = "1px solid red";
                message.style.border = "1px solid red";
              } else if (user.value === "") {
                e.preventDefault();
                alert('Please fill out User field before sending');
                user.style.border = "1px solid red";
              } else if (message.value === "") {
                e.preventDefault();
                alert('Please fill out Message field before sending');
                message.style.border = "1px solid red";
              } else {
                alert(`Message sent successfully to ${user.value}`);
                user.value = null;
                user.style.border = "1px solid lightgrey";
                message.value = null;
                message.style.border = "1px solid lightgrey";
              }
        };
    });

