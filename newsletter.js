const cards = [
  {
    title: 'Пережить ЕГЭ-2020',
    text:
      'Специальная рассылка для тех, кто готовится к главному школьному экзамену',
    color: '#ff406b',
  },
  {
    title: 'Штаны на лямках',
    text:
      'Письма о том, как подготовить себя и дошкольника к первому классу',
    color: '#a741ff',
  },
  {
    title: 'Первый класс',
    text:
      'Рассылка для родителей первоклашек о начале школьного пути',
    color: '#07c397',
  },
  {
    title: 'Привет, учитель!',
    text:
      'Авторские письма от учителей со всего мира про свою профессию и не только',
    color: '#5c3fe7',
  },
  {
    title: 'Чем займёмся?',
    text:
      'Лучшие московские мероприятия для всей семьи в пяти предложениях',
    color: '#ffae1f',
  },
  {
    title: 'Дайджест',
    text:
      'Лучшие статьи «Мела» два раза в неделю — во вторник и в пятницу',
    color: 'orange',
  },
];

for (let i = 0; i < cards.length; i++) {
  const new_card = document.createElement('div');

  new_card.classList.add('cards');
  new_card.innerHTML = `
  <div class="newslatter-color" style="background-color:${cards[i].color};">
      <div class="newsletter-title">
        ${cards[i].title}
      </div>
      <div class="newsletter-text">
        ${cards[i].text}
      </div>
      <div class="newsletter-button">Узнать больше</div>
    </div>`;

  document.querySelector('.newsletters-cards').appendChild(new_card);
}