function fname() {
  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  document.getElementById("fname_output").innerHTML =
    firstName.value.toUpperCase() + " " + lastName.value.toUpperCase();
}

function gen() {
  var genderSelected = document.getElementById("gender");
  // console.log(genderSelected.value);
  document.getElementById("gender_output").innerHTML = genderSelected.value;
  if (genderSelected.value == "MALE") {
    document.getElementById("salutation").innerHTML = "Mr. ";
  } else if (genderSelected.value == "FEMALE") {
    document.getElementById("salutation").innerHTML = "Mrs. ";
  } else {
    document.getElementById("salutation").innerHTML = "Mr. / Mrs. ";
  }
}

function checkIn() {
  var checkInDate = document.getElementById("checkIn");
  document.getElementById("ckeckIn_output").innerHTML = checkInDate.value;
  // document.getElementById("ckeckIn_output").innerHTML =
  var currentDate = new Date().toLocaleDateString();
  console.log(currentDate + " " + checkInDate.value);
}
function checkOut() {
  var checkOutDate = document.getElementById("checkOut");
  document.getElementById("checkOut_output").innerHTML = checkOutDate.value;
}

function services() {
  var serviceSelected = document.getElementById("services");
  // document.getElementById("service_output").innerHTML = serviceSelected.value;
  if (serviceSelected.value == "FIVE STAR") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * * * * <br>" + " FIVE STAR ";
  } else if (serviceSelected.value == "PREMIUM") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * *  <br>" + " PREMIUM ";
  } else if (serviceSelected.value == "ULTRA PREMIUM") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * * * <br>" + " ULTRA PREMIUM ";
  } else {
    document.getElementById("service_output").innerHTML =
      "SELECT YOUR COMFORT ";
  }
}
