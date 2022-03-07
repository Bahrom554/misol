function $(selector){
    return document.querySelector(selector);
}
let elpush = $('.push');
let elpop = $('.pop');
let elshift = $('.shift');
let elunshift = $('.unshift');
let elinput = $('input');
let elMenu = $('.menu');
let arr =[];
function show(){
    elMenu.textContent="";
    let elFragment = document.createDocumentFragment();
    for(let i =0; i<arr.length; i++){
      let elItem = document.createElement('li');
      elItem.textContent = arr[i];
      elFragment.appendChild(elItem);
      }
      elMenu.appendChild(elFragment);
      elinput.value="";
      elinput.focus();
}

elpush.addEventListener('click', function(){
    arr.push(elinput.value.trim());
  show();
    
})