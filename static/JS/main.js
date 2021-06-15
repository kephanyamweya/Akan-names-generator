function calculate () {
  let day = document.getElementsById("day").value;
  let dd = parseInt(day);
  let month = document.getElementsById("month").value;
  let mm = parseInt(month);
  let year = document.getElementsById("year").value;
  let year = parseInt(year.to String().slice(2, 4));
  // var cc=(yy-1)/100+1;
  let cc = Math.ceil(year/100)
  /* formula*/
  let result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender").checked) {
    let gender = 'male';
  }
  else {
    let gender = 'female';
  }
  if(dd<=0 || dd >31){
    alert("Enter correct date");
  }
  else if(mm<=0 || mm>12){
    alert("Enter correct month");
  }
  else if (Math.round(result) == 0 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan Name is " + maleNames[0]);
  }
  else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + maleNames[1]);
  }
  else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Tuesday, your Akan Name is " + maleNames[2]);
  }
  else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[3]);
  }
  else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Thursday, your Akan Name is " + maleNames[4]);
  }
  else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Friday, your Akan Name is " + maleNames[5]);
  }
  else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on Saturday, your Akan Name is " + maleNames[6]);
  }
  else if (Math.round(result) == 0 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan name is " + femaleNames[0]);
  }
  else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + femaleNames[1]);
  }
  else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Tuesday, your Akan Name is " + femaleNames[2]);
  }
  else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + femaleNames[3]);
  }
  else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Thursday, your Akan Name is " + femaleNames[4]);
  }
  else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Friday, your Akan Name is " + femaleNames[5]);
  }
  else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on Saturday, your Akan Name is " + femaleNames[6]);
  }
  else {
    alert (fill all spaces)
  }
}

