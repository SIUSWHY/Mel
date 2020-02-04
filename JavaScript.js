const cards = [
  {
    title: 'ЭМОЦИИ',
    text:
      '«За одной и той же истерикой могут стоять разные причины». Как научиться управлять эмоциями',
    img: 'img/1.png',
    likeCount: 3874,
    viewCount: 6,
  },
  {
    title: 'БЛОГИ',
    text: "New Year's Resolutions: как правильно ставить цели на год",
    img: 'img/2.png',
    likeCount: 1231,
    viewCount: 15,
  },
  {
    title: 'ЭКЗАМЕНЫ',
    text:
      'Базовая математика — не тот экзамен, которого стоит бояться.Советы репетитора',
    img: 'img/3.png',
    likeCount: 1541,
    viewCount: 22,
  },
  {
    title: 'ПАРТНЁРСКИЙ МАТЕРИАЛ',
    text:
      'Этой планете нужен герой. Получится ли у вас в новом году спасти мир?',
    img: 'img/6.gif',
    likeCount: 4363,
    viewCount: 43,
  },
  {
    title: 'ВОПРОС-ОТВЕТ',
    text: 'Как организовать раздельный сбор мусора в школе?',
    img: 'img/5.png',
    likeCount: 2342,
    viewCount: 24,
  },
  {
    title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
    text: '3 способа погрузиться в немецкий язык с головой',
    img: 'img/8.png',
    likeCount: 515,
    viewCount: 10,
  },
  {
    title: 'БЛОГИ «Мела»',
    text:
      'Откуда берутся гендерные стереотипы в школе и о чём мечтают молодые учителя',
    img: 'img/10.png',
    likeCount: 5416,
    viewCount: 32,
  },
  {
    title: 'ПАРТНЕРСКАЯ ПРОГРАММА',
    text:
      'Некогда поесть, присесть и поспать: как и почему устают наши дети (а главное — что с этим делать)',
    img: 'img/11.png',
    likeCount: 488,
    viewCount: 19,
  },
  {
    title: 'НОВЫЙ ГОД',
    text: '«Как год встретишь, так его и проведёшь». Почему мы верим в приметы',
    img: 'img/9.png',
    likeCount: 2544,
    viewCount: 28,
  },
  {
    title: 'БЛОГИ',
    text: 'Что должен уметь финский первоклассник: всё о подготовке к школе',
    img: 'img/9.jpg',
    likeCount: 2913,
    viewCount: 32,
  },
  {
    title: 'БЛОГИ',
    text:
      '«Учителя не успевают за потоком информации»: как школа отстаёт от реальной жизни',
    img: 'img/8.jpg',
    likeCount: 648,
    viewCount: 8,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что посмотреть с детьми: 12 мультфильмов Disney и Pixar, удостоенных премии «Оскар»',
    img: 'img/12.png',
    likeCount: 311,
    viewCount: 10,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что мешает подросткам полюбить классику и что мы можем с этим сделать',
    img: 'img/10.jpg',
    likeCount: 894,
    viewCount: 11,
  },
  {
    title: 'БЛОГИ',
    text: '«Больше не могу»: почему учителя уходят из начальной школы',
    img: 'img/11.jpg',
    likeCount: 3478,
    viewCount: 27,
  },
  {
    title: 'БЛОГИ',
    text: '5 проблем, из-за которых нам сложно учить иностранный',
    img: 'img/13.png',
    likeCount: 2147,
    viewCount: 21,
  },
  {
    title: 'БЛОГИ',
    text:
      '7 классных школ, чтобы научиться программировать и побеждать на олимпиадах',
    img: 'img/14.png',
    likeCount: 3184,
    viewCount: 28,
  },
];

for (let i = 0; i < cards.length; i++) {
  const new_card = document.createElement('div');

  new_card.classList.add('card');
  new_card.innerHTML = `
  <img src="${cards[i].img}" alt="picture" style="width:280px;height:220px;">
    <div class="blog-size" style="width: 230px; height:150px;" >
      <div class="blog-name">
        ${cards[i].title}
      </div>
      <div class="blog-text" style="width: 230px; height:150px;">
        ${cards[i].text}
      </div>
      <div class="card-status" >
        <span><i class="fas fa-eye" aria-hidden="true"></i></span> ${cards[i].likeCount}
        <span><i class="fas fa-comment" aria-hidden="true"></i></span> ${cards[i].viewCount}
      </div>
    </div>`;

  document.querySelector('.cards-wrapper').appendChild(new_card);
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
