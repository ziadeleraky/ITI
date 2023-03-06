class Tickets {
  tickets = [];

  addTicket(seatNum, flightNum, departure, arrival, date) {
    this.tickets.push({
      seatNum,
      flightNum,
      departure,
      arrival,
      date,
    });
  }

  displayTickets() {
    return console.log(this.tickets);
  }

  getTicket(seatNum) {
    return console.log(this.tickets.find((ticket) => ticket.seatNum === seatNum));
  }

  updateTicket(seatNum, flightNum, departure, arrival, date) {
    const ticket = this.tickets.find((ticket) => ticket.seatNum === seatNum);
    ticket.flightNum = flightNum;
    ticket.departure = departure;
    ticket.arrival = arrival;
    ticket.date = date;
    return console.log(ticket);
  }
}

module.exports = Tickets;
