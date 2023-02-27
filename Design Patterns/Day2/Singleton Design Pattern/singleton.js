class DBConnection {
  constructor(url) {
    this.url = url;
    // check if the instance already exists and throw an error if it does
    if (DBConnection.instance) {
      throw new Error("DBConnection is already instantiated!");
    }
    // static property to store the instance
    DBConnection.instance = this;
  }

  // connect and disconnect methods
  connect() {
    console.log(`DB ${this.url} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = new DBConnection("mongodb://...");
connection.connect();
connection.disconnect();
const connection2 = new DBConnection("mongodb://...");
