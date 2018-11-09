const input = document.querySelector("input");
const p = document.createElement('p');
const form = document.querySelector('form');

input.addEventListener('keypress', eventHandler);

  function eventHandler (event) {

    if (event.which === 13) {
      if(input.value.length===0){
    p.innerText= "#FAIL you must enter a name";
    form.append(p);
    event.preventDefault();

    }
    else  {
    p.innerText= "Hello " + input.value +  " nice to meet you!";
    form.append(p);
    event.preventDefault();
    document.querySelector("input").value = "";
    }
  }
}
