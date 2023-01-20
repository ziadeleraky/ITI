function Linkedlist(start, end, step) {
  let list = [];
  Object.defineProperties(this, {
    initial: {
      value: intialList,
      // By default can't be deleted, overwrited and modified
    },
    prepend: {
      value: enQueue,
      // By default can't be deleted, overwrited and modified
    },
    Dequeue: {
      value: deQueue,
      // By default can't be deleted, overwrited and modified
    },
    Append: {
      value: push,
      // By default can't be deleted, overwrited and modified
    },
    Pop: {
      value: pop,
      // By default can't be deleted, overwrited and modified
    },
  });

  // Private Method that initialize and fill the list
  function intialList() {
    for (let i = start; i <= end; i += step) {
      list.push({ value: i });
    }
  }

  function enQueue(val) {
    // Checking if list is empty
    if (list.length == 0) {
      list.unshift({ value: val });
    } else {
      // Checking if first index of list is less than val or Not
      //  && list[0].value - step == val
      if (list[0].value > val && list[0].value - step == val) {
        list.unshift({ value: val });
      } else {
        throw new Error("Can't Prepend!");
      }
    }
  }

  function deQueue() {
    // Checking if there's data or not
    if (list.length > 0) {
      return list.shift();
    } else {
      throw new Error("Can't deQueue!");
    }
  }

  function push(val) {
    if (list.length > 0) {
      if (list[list.length - 1].value > val && val % this.step == 0) {
        throw new Error("Can't Append!");
      } else {
        list.push({ value: val });
      }
    } else {
      list.push({ value: val });
    }
  }

  function pop() {
    if (list.length == 0) {
      throw new Error("LinkedList is Empty");
    } else {
      return list.pop();
    }
  }

  // Overriding toString Method
  Linkedlist.prototype.toString = function () {
    return list;
  };

  // LinkedList Public Method
  this.display = function () {
    return list;
  };
}

// TEST
let lnk = new Linkedlist(0, 10, 2);

console.log("---<Initialization>---");
lnk.initial();
console.log(lnk.display());

// console.log(lnk.toString()[0]);

console.log("---<Prepend>---");
// lnk.prepend(-1);
// lnk.prepend(-3);
lnk.prepend(-2);
// lnk.Append();
console.log(lnk.display());

// console.log("---<Dequeue>---");
// lnk.Dequeue();
// console.log(lnk.display());

// console.log("---<Append>---");
// lnk.Append(7);
// console.log(lnk.display());

// console.log("---<Pop>---");
// lnk.Pop();
// console.log(lnk.display());

// console.log("---<toString>---");
// console.log(lnk.toString());
