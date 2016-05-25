
import valider from './validator';

let form = document.querySelector('#myModal form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    valider(form);
});
