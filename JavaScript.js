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
    likeCount: 1,
    viewCount: 1,
  },
  // {
  //   title: 'УЧИТЕЛЯМ',
  //   text: '9 весёлых способов сделать уроки географии интереснее',
  //   img: 'img/4.png',
  //   likeCount: 1,
  //   viewCount: 1,
  // },
  {
    title: 'ЭКЗАМЕНЫ',
    text:
      'Базовая математика — не тот экзамен, которого стоит бояться.Советы репетитора',
    img: 'img/3.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'ПАРТНЁРСКИЙ МАТЕРИАЛ',
    text:
      'Этой планете нужен герой. Получится ли у вас в новом году спасти мир?',
    img: 'img/6.gif',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'ВОПРОС-ОТВЕТ',
    text: 'Как организовать раздельный сбор мусора в школе?',
    img: 'img/5.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
    text: '3 способа погрузиться в немецкий язык с головой',
    img: 'img/8.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ «Мела»',
    text:
      'Откуда берутся гендерные стереотипы в школе и о чём мечтают молодые учителя',
    img: 'img/10.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'ПАРТНЕРСКАЯ ПРОГРАММА',
    text:
      'Некогда поесть, присесть и поспать: как и почему устают наши дети (а главное — что с этим делать)',
    img: 'img/11.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'НОВЫЙ ГОД',
    text: '«Как год встретишь, так его и проведёшь». Почему мы верим в приметы',
    img: 'img/9.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text: 'Что должен уметь финский первоклассник: всё о подготовке к школе',
    img: 'img/9.jpg',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text:
      '«Учителя не успевают за потоком информации»: как школа отстаёт от реальной жизни',
    img: 'img/8.jpg',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что посмотреть с детьми: 12 мультфильмов Disney и Pixar, удостоенных премии «Оскар»',
    img: 'img/12.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что мешает подросткам полюбить классику и что мы можем с этим сделать',
    img: 'img/10.jpg',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text: '«Больше не могу»: почему учителя уходят из начальной школы',
    img: 'img/11.jpg',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что посмотреть с детьми: 12 мультфильмов Disney и Pixar, удостоенных премии «Оскар»',
    img: 'img/12.png',
    likeCount: 1,
    viewCount: 1,
  },
  {
    title: 'БЛОГИ',
    text:
      'Что посмотреть с детьми: 12 мультфильмов Disney и Pixar, удостоенных премии «Оскар»',
    img: 'img/12.png',
    likeCount: 1,
    viewCount: 1,
  },
];

for (let i = 0; i < cards.length; i++) {
  const new_card = document.createElement('div');

  new_card.style.background = 'white';
  new_card.style.width = '280px';
  new_card.style.height = '440px';
  new_card.style.margin = '15px';
  new_card.innerHTML = `
<img src="${cards[i].img}" alt="picture" style="width:280px;height:220px;">
          <div class="blog-size">
            <div class="blog-name">
            ${cards[i].title}
            </div>
            <div class="blog-text" style="width: 230px; height:125px;">
            ${cards[i].text}
            </div>
            <div class="card-status">
              <span><i class="fas fa-eye" aria-hidden="true"></i></span> 1 297
              <span><i class="fas fa-comment" aria-hidden="true"></i></span> 6
            </div>
          </div>`;

  document.querySelector('.cards-wrapper').appendChild(new_card);
}
