const input = document.querySelector("input");
const form = document.querySelector('form');
const cursor = input.focus();

input.addEventListener('keypress', eventHandler);


  function eventHandler (event) {

    if (event.which === 13) {
      if(input.value.length===0){
    const p = document.createElement('p');
    p.innerText= "#FAIL you must enter a name";
    p.classList.add('yellow');
    form.append(p);
    event.preventDefault();

    }
    else  {
    const p = document.createElement('p');
    p.innerText= "Hello " + input.value +  " is it me your looking for?";
    form.append(p);
    var audio = new Audio('audio/Hello.mp3');
    audio.play();
    event.preventDefault();
    document.querySelector("input").value = "";
    }
  }
}
