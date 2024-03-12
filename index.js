// index.js

// Zenith - An innovative platform designed to streamline task management and enhance productivity for individuals and teams.

// Zenith functionality
class Zenith {
    constructor() {
        this.tasks = [];
    }

    // Method to add a new task
    addTask(taskName, project, priority, deadline) {
        const task = {
            name: taskName,
            project: project,
            priority: priority,
            deadline: deadline
        };
        this.tasks.push(task);
    }

    // Method to display all tasks
    displayTasks() {
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(`- ${task.name}`);
            console.log(`  Project: ${task.project}`);
            console.log(`  Priority: ${task.priority}`);
            console.log(`  Deadline: ${task.deadline}`);
        });
    }
}

// Example usage:
const zenithApp = new Zenith();

// Adding tasks
zenithApp.addTask("Update Website Content", "Website Redesign", "High", "March 31, 2024");
zenithApp.addTask("Review Marketing Plan", "Marketing Strategy", "Medium", "April 15, 2024");

// Displaying tasks
zenithApp.displayTasks();
