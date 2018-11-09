

  const input = document.querySelector("input");




  input.addEventListener('keypress', eventHandler);


  function eventHandler (event) {

    if (event.which === 13) {
      if(input.value.length===0){
    const p = document.createElement('p');
    p.innerText= "you fail";
    const form = document.querySelector('form');
    form.append(p);
    event.preventDefault();

    }

    else  {
    const p = document.createElement('p');
    p.innerText= "Hello " + input.value +  " nice to meet you!";
    const form = document.querySelector('form');
    form.append(p);
    event.preventDefault();

    }


  }
}
