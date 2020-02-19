const posters = [
    {
        title: 'Специальный показ фильма «Милый друг» в Пионере',
        img: 'img/12.jpg',
        date: '26 февраля',
        time: '16:45',
    },
    {
        title: 'Цикл лекций «Семья как конструктор», приуроченных к выставке «Фамильные ценности»',
        img: 'img/13.jpg',
        date: '12 марта',
        time: '19:29',
    },
    {
        title: 'Спектакль «Андерсен» в театре МОСТ',
        img: 'img/14.jpg',
        date: '20 марта',
        time: '09:14',
    },
    {
        title: 'Экологическая онлайн-олимпиада детей от «Доброй школы»',
        img: 'img/15.jpg',
        date: '10 апреля',
        time: '12:34',
    },

];

for (let i = 0; i < posters.length; i++) {
    const new_poster = document.createElement('div');

    new_poster.classList.add('posters');
    new_poster.innerHTML = `
    <div class="b-article-feed__article-preview">
            <div class="b-article-preview__info-section">
                <div class="b-article-preview__publication-date-b-article-preview__publication-date_highlighted">${posters[i].date}</div>
                <div class="b-article-preview__publication-time">${posters[i].time}</div>
            </div>
            <div class="b-article-preview__main-section">
                <div class="b-article-preview__title">${posters[i].title}</div>
                <div class="b-article-preview__cover-image"> <img src="${posters[i].img}" alt="picture"
                        style="max-width: 450px;">
                </div>
                <div class="b-article-preview__read-next">Читать дальше</div>
            </div>
        </div>`;

    document.querySelector('.poster-cards').appendChild(new_poster);
}