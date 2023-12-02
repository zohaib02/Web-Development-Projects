/* name;
https://www.w3schools.com/html/html_forms.asp

https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_checkbox

https://www.c-sharpcorner.com/article/creating-a-feedback-form-using-html/#:~:text=%20Creating%20a%20Feedback%20Form%20Using%20HTML%20,the%20code%20while%20developing%20a%20website.%20More%20

https://codeconvey.com/feedback-form-in-html/


https://stackoverflow.com/questions/16839024/javascript-name-validation

/** script to validate feedback form */

https://stackoverflow.com/questions/37548397/html5-validate-input-to-accept-alphabets-only

function checkdata() {
  /*Validation for the Title input */
  var mr = document.getElementById("title1").checked;
  var mrs = document.getElementById("title2").checked;
  /* check if title is empty*/
  if (mr == false && mrs == false) {
    alert("Title can not be left empty!");
    return false;
  }
  /*Validation for the name input */
  if (document.getElementById("name").value == "") {
    alert("Please type in your name");
    document.getElementById("name").style.borderColor = "red";
    return false;
  }

  var alphaExp = /^[a-zA-Z\s]+$/;
  if (!document.messageme.name.value.match(alphaExp)) {
    alert("Name must contain ONLY letters of the alphabet");
    document.messageme.name.focus();
    return false;
  }

  /* Start - Validation for the 'gender' radio buttons input */
  var gender = document.getElementById("gender");
  if (gender.value == "select") {
    //If the "Please Select" option is selected display error.
    alert("Please select an option!");
    return false;
  }
  /* End - Validation for the 'gender' radio buttons input */

  /*Start - Validation for the 'purpose' input */
  var p = 0,
  chk = document.getElementsByName("purpose");
  for (p = 0; p < chk.length; p++) {
    if (chk.item(p).checked == false) {
    p++;
    }
    if (p == chk.length) {
      alert("Please tick one of the boxes");
      document.getElementById("purpose").style.border = "";
      return false;
    }
  /*End - Validation for the 'purpose' input */

  /*Validation for the 'Email' input */
  if (document.getElementById("email").value == "") {
    alert("Please type in your email");
    document.getElementById("email").style.borderColor = "red";
    return false;
  }

  var emailvalidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!document.messageme.email.value.match(emailvalidation)) {
    alert("Please enter a valid email address. Example: abc@hcuc.com");
    document.messageme.email.focus();
    return false;
  }
  
  if (document.messageme.message.value == "") {
    /*check if title is empty*/
    alert("Message can not be empty");
    return false;
  } else {
    return true;
  }
}