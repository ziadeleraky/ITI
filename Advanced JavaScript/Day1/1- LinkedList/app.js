let linkedList = {
  data: [],
  enQueue: function (val) {
    // Checking if data is empty
    if (this.data.length == 0) {
      this.data.unshift({ value: val });
    } else {
      // Checking if first index of data is less than val or Not
      if (this.data[0].value > val) {
        this.data.unshift({ value: val });
      } else {
        throw new Error("Can't enQueue!");
      }
    }
  },
  deQueue: function () {
    // Checking if there's data or not
    if (this.data.length > 0) {
      return this.data.shift();
    } else {
      throw new Error("Can't deQueue!");
    }
  },
  push: function (val) {
    if (this.data.length > 0) {
      if (this.data[this.data.length - 1].value > val) {
        throw new Error("Can't Push!");
      } else {
        this.data.push({ value: val });
      }
    } else {
      this.data.push({ value: val });
    }
  },
  pop: function () {
    if (this.data.length == 0) {
      throw new Error("LinkedList is Empty");
    } else {
      return this.data.pop();
    }
  },
  insert: function (val) {
    let flag = "flag";
    let index = 0;
    for (let i = 0; i < this.data.length; i++) {
      // Check if there's deplicated data or not
      if (this.data[i].value == val) {
        flag = i;
      }
      // Get index of the closest element from val
      if (this.data[i].value < val) {
        index = i;
      }
    }
    if (flag !== "flag") {
      throw new Error("Can't Insert!");
    } else {
      this.data.splice(index + 1, 0, { value: val });
    }
  },
  remove: function (val) {
    let index = "flag";
    for (let i = 0; i < this.data.length; i++) {
      // Check if there's data or not
      if (this.data[i].value == val) {
        index = i;
      }
    }
    if (index !== "flag") {
      this.data.splice(index, 1);
    } else {
      throw new Error("Data not found!");
    }
  },
  display: function () {
    return console.log(this.data);
  },
};

// ----< enQueue >----
// linkedList.enQueue(4);
// linkedList.enQueue(2);
// linkedList.enQueue(1);
// linkedList.enQueue(0);

// linkedList.push(5);
// linkedList.pop();
// linkedList.insert(3);
// linkedList.remove(0);

// linkedList.display();
