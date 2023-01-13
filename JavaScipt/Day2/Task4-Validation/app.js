let user, phone, mobile, email;
let flag = true;
let nameReg = /[^0-9]/;
let phoneReg = /[0-9]{8}/;
let mobileReg = /^(010|011|012)[0-9]{8}/;
let emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function write(info, msg, col) {
  document.write(
    "<p style='color:" +
      col +
      ";'>" +
      msg +
      " " +
      "<span>" +
      info +
      "</span>" +
      "</p>"
  );
}

// Username
while (flag) {
  user = prompt("Enter Your Name");
  if (nameReg.test(user)) {
    alert("Your name has been added successfully!");
    flag = false;
  } else {
    alert("Please Enter a Valid Name. Doesn't contain any numbers");
  }
}

// Phone Number
flag = true;
while (flag) {
  phone = prompt("Enter Your Phone Number");
  if (phoneReg.test(phone)) {
    alert("Your phone has been added successfully!");
    flag = false;
  } else {
    alert("Please Enter a Valid Phone. Numbers only with 8 length");
  }
}

// Mobile Number
flag = true;
while (flag) {
  mobile = prompt("Enter Your Mobile Number");
  if (mobileReg.test(mobile)) {
    alert("Your Mobile has been added successfully!");
    flag = false;
  } else {
    alert("Please Enter a Valid Mobile.");
  }
}

// Email
flag = true;
while (flag) {
  email = prompt("Enter Your Email");
  if (emailReg.test(email)) {
    alert("Your Email has been added successfully!");
    flag = false;
  } else {
    alert("Please Enter a Valid Email.");
  }
}

let color = prompt("Enter Color Name - red - green - blue -");
alert("Data has been added Successfully, Thanks! Happy Coding =)");

write(user, "Your Name is", color);
write(phone, "Your Phone is", color);
write(mobile, "Your Mobile is", color);
write(email, "Your Email is", color);
