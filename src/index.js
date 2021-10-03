import './style.css';

const activities = [
  {
    description: 'Do the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'Go to the movies',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a walk',
    completed: true,
    index: 2,
  },
  {
    description: 'Read a novel',
    completed: false,
    index: 3,
  },
  {
    description: 'Do the laundry',
    completed: true,
    index: 0,
  },
];

activities.forEach((e) => {
  const html = `<input id="input-field" type="checkbox">
  <input value="${activities.description}" type="text"></input>
  <i class="fas fa-ellipsis-v"></i>`;
  const div = document.createElement('div');
  div.innerHTML = html;
  const input = div.querySelector('.input-field');
});