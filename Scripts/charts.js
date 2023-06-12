 
// Add your JavaScript code here
// Configure data for the gender chart
const genderData = {
  labels: ['Male', 'Female'],
  datasets: [{
    data: [24, 52], // Replace with your actual data
    backgroundColor: ['#3498db', '#DE4D86'],
  }],
};

// Configure options for the gender chart
const genderOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

// Create the gender chart
const genderChartCanvas = document.getElementById('genderChart').getContext('2d');
new Chart(genderChartCanvas, {
  type: 'pie',
  data: genderData,
  options: genderOptions,
});

// Configure data for the appointments chart
const appointmentsData = {
  labels: ['Week 1', 'Week 2', 'Week 3','Week 4', 'Week 5', 'Week 6'], // Replace with your actual labels
  datasets: [{
    label: 'Appointments',
    data: [22, 17, 20, 16, 20,17], // Replace with your actual data
     
    backgroundColor: '#1abc9c',
      fill:false,
     
  }],
};

// Configure options for the appointments chart
const appointmentsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Create the appointments chart
const appointmentsChartCanvas = document.getElementById('appointmentsChart').getContext('2d');
new Chart(appointmentsChartCanvas, {
  type: 'bar',
  data: appointmentsData,
  options:  appointmentsData


});
// Configure data for the revenue chart
const revenueData = {
    labels: ['Week 1', 'Week 2', 'Week 3','Week 4', 'Week 5', 'Week6'], // Replace with your actual labels
    datasets: [{
      label: 'Revenue',
      data: [1500, 3007,2000, 2200, 4700,3000], // Replace with your actual data
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      borderColor: 'rgba(52, 152, 219, 1)',
      borderWidth: 4,
      pointBackgroundColor: 'blue',
      pointRadius: 6,
      pointBorderWidth: 5,
      pointBorderColor: '#fff',
      fill: true,
    }],
  };
  
  // Configure options for the revenue chart
  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  // Create the revenue chart
  const revenueChartCanvas = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueChartCanvas, {
    type: 'line',
    data: revenueData,
    options: revenueOptions,
  });
  
 