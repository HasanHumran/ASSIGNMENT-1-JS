const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('my-form').style.backgroundColor = 'red';

    document.body.classList.add('bg-dark');

    const ul = document.querySelector('.items');
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

    btn.style.backgroundColor = 'yellow';
});
