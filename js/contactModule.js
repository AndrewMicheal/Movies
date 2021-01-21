export class Contact {
  constructor(name, email, phone, password, rePassword, age , alertName , alertAge , alertEmail , alertPhone , btn , contact ,alertPassword , alertRepassword) {
    this.nameElement = name;
    this.emailElement = email;
    this.phoneElement = phone;
    this.passwordElement = password;
    this.rePasswordElement = rePassword;
    this.ageElement = age;
    this.btnElement = btn;
    this.contactElement = contact;
    this.alertNameElement = alertName;
    this.alertAgeElement = alertAge;
    this.alertEmailElement = alertEmail;
    this.alertPhoneElement = alertPhone;
    this.alertPasswordElement = alertPassword;
    this.alertRepasswordElement = alertRepassword;
    this.nameElement.addEventListener("input", this.checkName.bind(this));
    this.emailElement.addEventListener("input", this.checkEmail.bind(this));
    this.ageElement.addEventListener("input", this.checkAge.bind(this));
    this.phoneElement.addEventListener("input", this.checkPhone.bind(this));
    this.passwordElement.addEventListener("input", this.checkPassword.bind(this));
    this.rePasswordElement.addEventListener("input", this.checkRepassword.bind(this));
    this.contactElement.addEventListener("click",this.checkContact.bind(this));
  }
  checkName() {
    var regexName = /^([a-zA-Z]+\s*[A-Z]*)+$/;
    if (regexName.test(this.nameElement.value.trim())) {
      this.alertNameElement.classList.add("d-none");
      return true;
    } 
    else {
      this.alertNameElement.classList.remove("d-none");
      this.nameElement.value.trim() == "" ? (this.alertNameElement.innerHTML = "please fill input Name") : (this.alertNameElement.innerHTML = "Enter Name in characters only");
      return false;
    }
  }
  checkEmail(){
    var regexEmail = /^\w+([-_.]\w+)*@\w+([.-]\w+)*\.\w+([-.]\w+)*$/;
    if (regexEmail.test(this.emailElement.value.trim())) {
      this.alertEmailElement.classList.add("d-none");
      return true;
    } 
    else {
      this.alertEmailElement.classList.remove("d-none");
      this.emailElement.value.trim() == "" ? (this.alertEmailElement.innerHTML = "please fill input Email Text") : (this.alertEmailElement.innerHTML = "please enter Email Format");
      return false;
    }
  }
  checkAge(){
    var regexAge = /^[1-9]\d$/;
    if (regexAge.test(this.ageElement.value.trim())) {
      this.alertAgeElement.classList.add("d-none");
      return true;
    } 
    else {
      this.alertAgeElement.classList.remove("d-none");
      this.ageElement.value.trim() == "" ? (this.alertAgeElement.innerHTML = "please fill input Age") :(this.alertAgeElement.innerHTML = "Enter Age Numbers Only (2 digit)");
      return false;
    }
  }
  checkPhone(){
    var regexPhone = /^(010|011|012|015)\d{8}$/;
    if (regexPhone.test(this.phoneElement.value.trim())) {
      this.alertPhoneElement.classList.add("d-none");
      return true;
    } 
    else {
      this.alertPhoneElement.classList.remove("d-none");
      this.phoneElement.value.trim() == "" ? (this.alertPhoneElement.innerHTML = "please fill input Phone Number") :(this.alertPhoneElement.innerHTML = "please enter phone number start with 010 or 011 012 015 and 8 numbers");
      return false;
    }
  }
  checkPassword(){
    var regexPassword = /^([a-zA-Z]+[0-9]+)+$/;
    if (regexPassword.test(this.passwordElement.value.trim()) && this.passwordElement.value.length >= 8) {
        this.alertPasswordElement.classList.add("d-none");
        return true;
    } 
    else {
        this.alertPasswordElement.classList.remove("d-none");
        this.passwordElement.value.trim() == "" ? (this.alertPasswordElement.innerHTML = "please fill input Password Field") :(this.alertPasswordElement.innerHTML = "entre valid password *Minimum eight characters, at least one letter and one number:*");
        return false;
    }
  }
  checkRepassword(){
     if(this.passwordElement.value === this.rePasswordElement.value){
         this.alertRepasswordElement.classList.add("d-none");
         return true;
     }
     else{
         this.alertRepasswordElement.classList.remove("d-none");
         this.alertRepasswordElement.innerHTML = "entre valid Repassword";
         return false;
     }
  }
  checkContact(){
      if(this.checkName() && this.checkEmail() && this.checkPhone() && this.checkAge() && this.checkPassword() && this.checkRepassword()){
          console.log("yes")
          this.btnElement.removeAttribute("disabled");
      }
      else{
          this.btnElement.setAttribute("disabled","true");
      }
  }
}