const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const _date = document.createElement('span');
  const _title = document.createElement('h1');
  const _temp = document.createElement('span');

  header.className = 'header';
  _date.className = 'date';
  _temp.className = 'temp';

  _date.textContent = date;
  _title.textContent = title;
  _temp.textContent = temp;

  header.appendChild(_date);
  header.appendChild(_title);
  header.appendChild(_temp);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector.appendChild(Header('Lambda Times', 'September 3, 2021', '73°'));
}

export { Header, headerAppender }