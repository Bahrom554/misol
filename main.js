let elMenu = document.querySelector('.menu');
let elFragment = document.createDocumentFragment();
for(let i=0; i<pokemons.length; i++){
    let elItem= document.createElement('li');
   let elImg = document.createElement('img');
   elImg.src =pokemons[i].img;
   let elName = document.createElement('p');
   elName.textContent = pokemons[i].name;
   elItem.appendChild(elImg);
   elItem.appendChild(elName);
   elFragment.appendChild(elItem);

}
elMenu.appendChild(elFragment);
