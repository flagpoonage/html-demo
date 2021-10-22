const button = document.getElementById('button');
const text = document.getElementById('test');

let index = 0;
const words = ['hello', 'goodbye', 'test'];

button.addEventListener('click', () => {
  index += 1;
  if (index  > words.length - 1) {
    index = 0;
  }

  const useWord = words[index];

  text.innerHTML = useWord;
});