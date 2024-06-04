//  Javascript
//  (Doesn't require extra library file)*/

var toggleMenu = document.querySelector(".toggle-menu");
// console.log(toggleMenu);
// toggleMenu.addEventListener("event",callback_function());
toggleMenu.addEventListener("click",function(){
    if(this.nextElementSibling.classList.contains("expand")){
        this.nextElementSibling.classList.remove ("expand");
    }else{
        this.nextElementSibling.classList.add("expand");
    }
});
/**
 * #2 jQuery (javascript)
 * (require jQuery library file on head of the document)
 */
//let accordDT=document.qurerySelector(".accordian dt");
    //Syntac initiators: jQuery of $

let accordDT = jQuery(".accordian dt");
accordDT.on("click", function(){
    $(this).toggleClass('expand');
    // jQuery(this).next('dd').slideDown(300).siblings('dd').slideUp(500);
    $(this).next('dd').slideToggle(300);

});
/**
 * #3 Javascript form validation scripts
 * :: Javascript DOM element selectors(use document key):
 *  ie: document.selectorMethod('DOM_Node_Identifier')
 *   - selectorMethods()
 *       - getElementById()
 *       - getElementByClassName()
 *       - getElementByTagName()
 *       - querySelector("CSS_Selector")
 *       - querySelectorAll("CSS_Selector")
 *       - form_name or form_name.field_name
 */
let formEle = document.contact_form;
// console.log(formEle);
//let fName = document.contact_form.full_name;
let FName= formEle.full_name,
addr = formEle.address,
email = formEle.email;
formEle.addEventListener("submit", function(e){
   if(FName.value == ""){
    // alert("Full Name is required!");
    FName.nextElementSibling.innerText= "Full name is required!";
    e.preventDefault();

   }
   if(addr.value == ""){
    addr=nextElementSibling.innerText = "Address is required!";
    e.preventDefault();
   }
   if(addr.value == ""){
    addr=nextElementSibling.innerText = "Email is required!";
    e.preventDefault();
   }

});
/**
 *  Javascript events:
 * - Window event (ie: onload)
 * - Form event(ie. :onsubmit)
 * -keyboard  event(ie. : onkeyup)
 * - Mouse event (ie.: onclick)
 */
email.addEventListener("keyup", function(){
    if(this.value.indexof('@') == -1){
        this .nextElementSibling.innerText = "One '@' symbol is required.";
    }else{
        this.nextElementSibling.innerText ="";
    }
});
/** study Regular Expression (RegEx)
 * - regexr.com(Recommended)
 * - rgex101.com etc..
 */
