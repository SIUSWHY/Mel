const cards = [
  {
    title: 'ЭМОЦИИ',
    text:
      '«За одной и той же истерикой могут стоять разные причины». Как научиться управлять эмоциями',
    img: 'img/1.png',
    viewCount: 3874,
    commentCount: 6,
  },
  {
    title: 'БЛОГИ',
    text: "New Year's Resolutions: как правильно ставить цели на год",
    img: 'img/2.png',
    viewCount: 1231,
    commentCount: 15,
  },
  {
    title: 'ЭКЗАМЕНЫ',
    text:
      'Базовая математика — не тот экзамен, которого стоит бояться.Советы репетитора',
    img: 'img/3.png',
    viewCount: 1541,
    commentCount: 22,
  },
  {
    title: 'ПАРТНЁРСКИЙ МАТЕРИАЛ',
    text:
      'Этой планете нужен герой. Получится ли у вас в новом году спасти мир?',
    img: 'img/6.gif',
    viewCount: 4363,
    commentCount: 43,
  },
  {
    title: 'ВОПРОС-ОТВЕТ',
    text: 'Как организовать раздельный сбор мусора в школе?',
    img: 'img/5.png',
    viewCount: 2342,
    commentCount: 24,
  },
  {
    title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
    text: '3 способа погрузиться в немецкий язык с головой',
    img: 'img/8.png',
    viewCount: 515,
    commentCount: 10,
  },
  {
    title: 'БЛОГИ «Мела»',
    text:
      'Откуда берутся гендерные стереотипы в школе и о чём мечтают молодые учителя',
    img: 'img/10.png',
    viewCount: 5416,
    commentCount: 32,
  },
  {
    title: 'ПАРТНЕРСКАЯ ПРОГРАММА',
    text:
      'Некогда поесть, присесть и поспать: как и почему устают наши дети (а главное — что с этим делать)',
    img: 'img/11.png',
    viewCount: 488,
    commentCount: 19,
  },
  {
    title: 'НОВЫЙ ГОД',
    text: '«Как год встретишь, так его и проведёшь». Почему мы верим в приметы',
    img: 'img/9.png',
    viewCount: 2544,
    commentCount: 28,
  },
  {
    title: 'БЛОГИ',
    text: 'Что должен уметь финский первоклассник: всё о подготовке к школе',
    img: 'img/9.jpg',
    viewCount: 2913,
    commentCount: 32,
  },
  {
    title: 'БЛОГИ',
    text:
      '«Учителя не успевают за потоком информации»: как школа отстаёт от реальной жизни',
    img: 'img/8.jpg',
    viewCount: 648,
    commentCount: 8,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что посмотреть с детьми: 12 мультфильмов Disney и Pixar, удостоенных премии «Оскар»',
    img: 'img/12.png',
    viewCount: 311,
    commentCount: 10,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что мешает подросткам полюбить классику и что мы можем с этим сделать',
    img: 'img/10.jpg',
    viewCount: 894,
    commentCount: 11,
  },
  {
    title: 'БЛОГИ',
    text: '«Больше не могу»: почему учителя уходят из начальной школы',
    img: 'img/11.jpg',
    viewCount: 3478,
    commentCount: 27,
  },
  {
    title: 'БЛОГИ',
    text: '5 проблем, из-за которых нам сложно учить иностранный',
    img: 'img/13.png',
    viewCount: 2147,
    commentCount: 21,
  },
  {
    title: 'БЛОГИ',
    text:
      '7 классных школ, чтобы научиться программировать и побеждать на олимпиадах',
    img: 'img/14.png',
    viewCount: 3184,
    commentCount: 28,
  },
];
let sortedCards = cards;

function render() {
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
    </div>`;

    document.querySelector('.cards-wrapper').appendChild(new_card);
  }
}

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

function chg() {
  sortedCards = cards.sort((item1, item2) =>
    item1.viewCount > item2.viewCount ? -1 : 1,
  );

  render();

  // var thumb = document.querySelectorAll('div.cards');
  // thumb = [].slice.call(thumb, 0);
  // var parent = thumb.map(function(el) {
  //   return el.parentNode;
  // });
  // thumb
  //   .sort(function(a, b) {
  //     return (
  //       b.querySelector('.viewCount').textContent -
  //       a.querySelector('.viewCount').textContent
  //     );
  //   })
  //   .forEach(function(el, i) {
  //     parent[i].appendChild(el);
  //   });
}

render();
