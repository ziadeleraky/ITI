const reserve = require("./reservationModule");

// Create an object from the class
const tickets = new reserve();

//? Testing
// Add tickets
tickets.addTicket(1, "123", "portsaid", "cairo", "2023-01-01");
tickets.addTicket(2, "456", "cairo", "portsaid", "2023-01-01");

// Display all tickets
// tickets.displayTickets();

// Get a ticket by seat number
// tickets.getTicket(2);

// Update a ticket by seat number
tickets.updateTicket(2, "789", "cairo", "alex", "2023-01-01");
// tickets.displayTickets();
