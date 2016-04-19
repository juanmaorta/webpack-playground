import utils from './utils.jsx';
import $ from 'jquery';

let list = $('ul');

$('button').on('click', () => {
    let li = $('<li>').html(utils.generateRandom());
    console.log(li.html());

    list.append(li);
});