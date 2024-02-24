/**Use the Date object to display the current date and time. Perform operations to:
      Get the day of the week.
      Set the year to a specific value

       */

 // ceated object date     
const currentDate = new Date();


console.log("Current Date and Time:", currentDate);

// Get the day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
console.log("Day of the Week:", dayOfWeek);

// Set the year to a specific value 
currentDate.setFullYear(2024);
console.log("Date with Year set to 2024:", currentDate);
