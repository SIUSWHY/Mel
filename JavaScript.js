

fetch('http://127.0.0.1:3000/cards').then((response) => {
  return response.json();
})
  .then((myJson) => {
    console.log(myJson)
    render(myJson)
  });

function render(sortedCards) {
  console.log(sortedCards)
  document.querySelector('.cards-wrapper').innerHTML = '';

  for (let i = 0; i < sortedCards.length; i++) {
    const new_card = document.createElement('div');

    new_card.classList.add('card');
    new_card.innerHTML = `
  <img src="${sortedCards[i].img}" alt="picture" style="width:280px;height:220px;">
    <div class="blog-size" style="width: 230px; height:150px;" >
      <div class="blog-name">
        ${sortedCards[i].title}
      </div>
      <div class="blog-text" style="width: 230px; height:150px;">
        ${sortedCards[i].text}
      </div>
      <div class="card-status" >
        <span><i class="fas fa-eye" aria-hidden="true"></i></span> ${sortedCards[i].viewCount}
        <span><i class="fas fa-comment" aria-hidden="true"></i></span> ${sortedCards[i].commentCount}
      </div>
      <data value="${sortedCards[i].newDate}">
    </div>`;

    document.querySelector('.cards-wrapper').appendChild(new_card);
  }
}

// DB - mel
// collection - cards
// insertMany
// server - find // https://expressjs.com/en/guide/database-integration.html#mongodb
// request - response -> cards // fetch

var lastResFind = '';
var copy_page = '';
function TrimStr(s) {
  s = s.replace(/^\s+/g, '');
  return s.replace(/\s+$/g, '');
}

function FindOnPage(inputId) {
  var obj = window.document.getElementById(inputId);
  var textToFind;

  if (obj) {
    textToFind = TrimStr(obj.value);
  } else {
    alert('Введенная фраза не найдена');
    return;
  }
  if (textToFind == '') {
    alert('Вы ничего не ввели');
    return;
  }

  if (textToFind.length < 2) {
    alert('Слишком короткий текст');
    return;
  }

  if (copy_page.length > 0) document.body.innerHTML = copy_page;
  else copy_page = document.body.innerHTML;

  document.body.innerHTML = document.body.innerHTML.replace(
    eval('/name=' + lastResFind + '/gi'),
    ' ',
  );
  document.body.innerHTML = document.body.innerHTML.replace(
    eval('/' + textToFind + '/gi'),
    '<a name=' +
    textToFind +
    " style='background:yellow;'>" +
    textToFind +
    '</a>',
  );
  lastResFind = textToFind;
  window.location = '#' + textToFind;
}

function onSort(event) {
  sort(event.target.value);
}

function sort(key) {
  sortedCards = cards.sort((item1, item2) =>
    item1[key] > item2[key] ? -1 : 1,
  );

  render();
}

// render();
