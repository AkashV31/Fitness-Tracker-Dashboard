// ECHO is on.
document.addEventListener('DOMContentLoaded', function () {
    const workoutForm = document.getElementById('workoutForm');
    
    // Global array to store workout objects
    let workouts = [];

    // --- Chart.js Tooltip Helper Function ---
    // This creates the hover-over box for the line charts
    const createLineChartTooltip = (context) => {
        const index = context.dataIndex;
        if (index === undefined || !workouts[index]) return;
        const workout = workouts[index];
        return [
            `Type: ${workout.type}`,
            `Calories: ${workout.calories}`,
            `Duration: ${workout.duration} min`,
            `Date: ${workout.date}`
        ];
    };

    // --- 1. Calories Chart (Line) ---
    const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
    const caloriesChart = new Chart(caloriesCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Calories Burned',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: { label: createLineChartTooltip }
                }
            }
        }
    });

    // --- 2. Duration Chart (Line) ---
    const durationCtx = document.getElementById('durationChart').getContext('2d');
    const durationChart = new Chart(durationCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Workout Duration (min)',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: { label: createLineChartTooltip }
                }
            }
        }
    });

    // --- 3. Workout Type Chart (Pie) ---
    const typeCtx = document.getElementById('typeChart').getContext('2d');
    const typeChart = new Chart(typeCtx, {
        type: 'pie',
        data: {
            labels: [], // e.g., ['Running', 'Cycling', 'Weights']
            datasets: [{
                label: 'Workout Count',
                data: [], // e.g., [5, 3, 2]
                backgroundColor: [
                    '#4BC0C0', // Teal
                    '#FF6384', // Red
                    '#FFCE56', // Yellow
                    '#36A2EB', // Blue
                    '#9966FF', // Purple
                    '#C9CBCF'  // Grey
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // --- Form Submit Event ---
    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from form
        const type = document.getElementById('type').value;
        const duration = parseInt(document.getElementById('duration').value);
        const calories = parseInt(document.getElementById('calories').value);
        const date = document.getElementById('date').value;

        // Basic validation
        if (!date || !type || isNaN(duration) || isNaN(calories) || duration <= 0 || calories <= 0) {
            // Replaced alert() with a non-blocking console error
            console.error('Please fill out all fields correctly.');
            return;
        }

        // Add new workout to the global array
        workouts.push({ type, duration, calories, date });

        // Sort workouts by date to keep charts chronological
        workouts.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Update all three charts
        updateAllCharts();

        // Reset the form
        workoutForm.reset();
    });

    // --- Main Update Function ---
    function updateAllCharts() {
        // --- 1 & 2: Update Line Charts (Calories & Duration) ---
        const sortedLabels = workouts.map(w => w.date);
        const caloriesData = workouts.map(w => w.calories);
        const durationData = workouts.map(w => w.duration);

        caloriesChart.data.labels = sortedLabels;
        caloriesChart.data.datasets[0].data = caloriesData;
        caloriesChart.update();
        
        durationChart.data.labels = sortedLabels;
        durationChart.data.datasets[0].data = durationData;
        durationChart.update();

        // --- 3: Update Pie Chart (Workout Types) ---
        // We need to count the occurrences of each workout type
        const typeCounts = workouts.reduce((acc, workout) => {
            acc[workout.type] = (acc[workout.type] || 0) + 1;
            return acc;
        }, {}); // Example: { Running: 2, Cycling: 1 }

        // Update the pie chart's data
        typeChart.data.labels = Object.keys(typeCounts);
        typeChart.data.datasets[0].data = Object.values(typeCounts);
        typeChart.update();
    }
});