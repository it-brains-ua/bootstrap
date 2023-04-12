// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopreview', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopreview', {
    // layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      Logo: 'Logo',
    },
    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
