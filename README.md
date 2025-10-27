Fitness Tracker Dashboard

A TCET Industry Practice (IP) Mini-Project Group 16: 
46-Darshan Vichare, 47-Akash Vishwakarma, 48-Bhumi Vishwakarma

1. Project Objective
The aim of this project is to create a functional, web-based fitness tracker dashboard. Users can log their daily workouts-including type, duration, calories burned, and date-and visualize their progress in real-time. This application serves as a client-side prototype, demonstrating modern frontend web technologies and data visualization.

2. Live Screenshot
<img width="1381" height="931" alt="image" src="https://github.com/user-attachments/assets/afc34896-d467-4bc1-8267-99eb4010ce4f" />

3. Features
* Log Workouts: A clean, easy-to-use form to submit new workouts.
* Real-Time Dashboard: All charts update instantly when a new workout is added.
* Chronological Ordering: All data is automatically sorted by date, ensuring the progress charts are always accurate, even if workouts are entered out of order.
* Multi-Metric Visualization:
o Calories Burned: A line chart tracking calories burned over time.
o Workout Duration: A line chart tracking the length of workouts over time.
o Workout Types: A pie chart showing the distribution of workout activities (e.g., Running, Cycling, etc.).
o Calories vs. Duration: A scatter plot to help identify trends (e.g., "Which workouts burn the most calories for their duration?").
* Enhanced Tooltips: Hover over any data point on the line charts to see a full summary of that day's workout.

4. How to Run This Project
This is a client-side-only application. It runs entirely in your web browser. No server or Java backend is required to run this demo.
Note: Because it is a client-side prototype, all workout data will be lost when you refresh the page.

#1 Download or Clone:
o Click the green < > Code button on GitHub.
o Select Download ZIP.
o Unzip the folder on your computer.
#2 Open the File:
o Navigate into the project folder.
o Simply double-click the index.html file.
o It will open in your default web browser (Chrome, Firefox, etc.) and be fully functional.

5. Technologies Used
* HTML5: For the core structure of the dashboard.
* CSS3: For all styling, layout (Flexbox), and responsiveness.
* JavaScript (ES6+): For all application logic, data handling, and DOM manipulation.
* Chart.js: A JavaScript library used to create all four interactive charts.
* Java: Used conceptually in Phase 1 to design the data models and backend logic (not yet connected).

6. Project Status
* Phase 1: Completed (Initial Java models, basic UI, single chart).
* Phase 2: Completed (Full UI redesign, multi-chart dashboard, bug fixes).
* Current State: Fully functional client-side prototype.

7. Future Work
The next logical step for this project is to transition it from a client-side prototype to a full-stack application.
* Connect Backend: Implement the Java backend using a framework like Spring Boot to create a REST API.
* Add Database: Connect the Java server to a database (like MySQL or H2) to permanently store user data.
* Integrate Frontend: Update the app.js file to use fetch() to send and receive data from the Java backend instead of a local array.

