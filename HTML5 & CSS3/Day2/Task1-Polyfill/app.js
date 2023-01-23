if (typeof window.localstorage == "undefined" || typeof window.sessionstorage == "undefined") {
  (function () {
    function Storage(type) {
      let setData = function (data) {
        // Convert data
        data = JSON.stringify(data);
        if (type == "session") {
          setCookie("sessionStorage", data);
        } else {
          let date = new Date();
          date.setFullYear(date.getFullYear() + 1);
          setCookie("localStorage", data, date);
        }
      };

      let getData = function () {
        var data = type == "session" ? getCookie("sessionStorage") : getCookie("localStorage");
        return data ? JSON.parse(data) : {};
      };

      let clearStorage = function () {
        if (type == "session") {
          setCookie("sessionStorage", "");
        } else {
          let date = new Date();
          date.setMonth(date.getMonth() + 1);
          setCookie("localStorage", "", date);
        }
      };

      let data = getData();

      return {
        length: 0,
        setItem: function (key, value) {
          data[key] = value + "";
          this.length++;
          setData(data);
        },
        getItem: function (key) {
          return data[key];
        },
        clear: function () {
          data = [];
          clearStorage();
          this.length = 0;
        },
        removeItem: function (key) {
          delete data[key];
          this.length--;
          setData(data);
        },
      };
    }
    if (typeof window.localstorage == "undefined") {
      window.localstorage = new Storage("local");
    }
    if (typeof window.sessionstorage == "undefined") {
      window.sessionstorage = new Storage("session");
    }
  })();
}
