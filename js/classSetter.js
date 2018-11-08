var pageName = document.querySelector('title').textContent;
console.log(pageName);

function oaClassAdd(oaClass){
  var mainBody = document.querySelector('body');
  mainBody.classList.add(oaClass);
}




if(pageName.includes("Confirm Identity")) {
  console.log('we are on the Confirm Identity Page');
  oaClassAdd('oa-confirm-identity');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Registration Information")) {
  console.log('we are on the Registration Information Page');
  oaClassAdd('oa-registration-information');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Registration Questions")) {
  console.log('we are on the Registration Questions Page');
  oaClassAdd('oa-registration-questions');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Admission Item")) {
  console.log('we are on the Admission Item Selection Page');
  oaClassAdd('oa-admission-items');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Sessions")) {
  console.log('we are on the Session Selection Page');
  oaClassAdd('oa-sessions');
  oaClassAdd('oa-registration');

}  else if(pageName.includes("Hotel Request")) {
  console.log('we are on the Hotel Request Page');
  oaClassAdd('oa-hotel-request');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Air Request")) {
  console.log('we are on the Air Request Page');
  oaClassAdd('oa-air-request');
  oaClassAdd('oa-registration');
  
} else if(pageName.includes("Registration Summary")) {
  console.log('we are on the Registration Summary page');
  oaClassAdd('oa-registration-summary');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Payment")) {
  console.log('we are on the Payment Page');
  oaClassAdd('oa-payment');
  oaClassAdd('oa-registration');

} else if(pageName.includes("Complete Registration")) {
  console.log('we are on the Complete Registration page');
  oaClassAdd('oa-complete-registration');
  oaClassAdd('oa-registration');
  
} else {
  console.log('IDK where I am');

} 

