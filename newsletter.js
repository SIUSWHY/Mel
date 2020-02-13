newsletters = [
    {
        title: 'БЛОГИ',
        text: "New Year's Resolutions: как правильно ставить цели на год",
    },
    {
        title: 'БЛОГИ',
        text: "New Year's Resolutions: как правильно ставить цели на год",
    },
    {
        title: 'БЛОГИ',
        text: "New Year's Resolutions: как правильно ставить цели на год",
    },
]




let NewsCards = newsletters

function render(NewsCards) {
    console.log(NewsCards)
    document.querySelector('.all-news-letters').innerHTML = '';

    for (let i = 0; i < NewsCards.length; i++) {
        const new_card = document.createElement('div');

        new_card.classList.add('newsletters');
        new_card.innerHTML = `
        <div class="newsletter-title">
          ${NewsCards[i].title}
        </div>
        <div class="newsletter-text">
          ${NewsCards[i].text}
        </div>
      </div>`;

        document.querySelector('.all-news-letters').appendChild(new_card);
    }
}