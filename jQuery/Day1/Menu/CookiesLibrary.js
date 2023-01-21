let cookies;

function setCookie(cookieName, cookieValue, expireDays) {
  if (arguments.length == 3 && typeof arguments[0] == "string" && typeof arguments[2] == "number") {
    let expiredate = new Date();
    expiredate.setDate(expiredate.getDate() + expireDays);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiredate;
  } else {
    throw new Error("Please Enter Cookie Name, Cookie Value and Expire Date");
  }
}

function getCookie(cookie) {
  if (arguments.length == 1) {
    let aCookies = [];

    // Trimming Whitespaces and preparing for the associative array
    cookies = document.cookie.split(";");
    for (let i in cookies) {
      cookies[i] = cookies[i].trim();
      cookies[i] = cookies[i].split("=");
    }

    // Associative Array
    for (let i = 0; i < cookies.length; i++) {
      aCookies[cookies[i][0]] = cookies[i][1];
    }

    return aCookies[cookie];
  } else {
    throw new Error("Please Enter One Cookie");
  }
}

function hasCookie(cookie) {
  if (arguments.length == 1) {
    if (getCookie(cookie)) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error("Please Enter One Cookie");
  }
}

function allCookieList() {
  return cookies;
}

function deleteCookie(cookie) {
  if (arguments.length == 1) {
    let oldDate = new Date("1998-05-31");
    document.cookie = cookie + "=;expires=" + oldDate;
  } else {
    throw new Error("Please Enter One Cookie");
  }
}
