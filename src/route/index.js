// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopcatalog', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcatalog', {
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
    },
    breadcrumb: [
      { name: 'Головна', url: 'https://github.com/' },
      {
        name: "Комп'ютери та ноутбуки",
        url: 'https://www.google.com/',
      },
      { name: 'Ноутбуки', url: null },
    ],
    header: 'Ноутбуки',
    sortBlock: [
      {
        placeholder: 'За ціною',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
      {
        placeholder: 'За новизною',
        options: [
          { value: '1', text: 'Спочатку нові' },
          { value: '2', text: 'Спочатку старі' },
        ],
      },
      {
        placeholder: 'За рейтингом',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
    ],
    filterBlock: {
      sellers: {
        title: 'Продавець',
        list: [{ value: 'Machinery' }, { value: 'інші' }],
      },
      brands: {
        title: 'Бренд',
        input: {
          placeholder: 'Пошук',
        },
        options: [
          { value: 'Acer' },
          { value: 'Apple' },
          { value: 'Asus' },
          { value: 'Dell' },
        ],
      },
      price: {
        title: 'Ціна',
        range: {
          from: '8 000',
          to: '30 000',
        },
        button: {
          text: 'OK',
          link: 'https://www.youtube.com/',
        },
      },

      filterList: [
        {
          title: 'Готов к отправке',
          options: [{ value: 'Готов к отправке' }],
        },
        {
          title: 'Процесор',
          options: [
            { value: 'Intel Core i7' },
            { value: 'Intel Core i5' },
            { value: 'Intel Core i3' },
            { value: 'AMD Ryzen 9' },
          ],
        },
        {
          title: 'Діагональ екрану',
          options: [
            { value: '13' },
            { value: '14' },
            { value: '15-16' },
            { value: '17-18' },
            { value: '9 - 12.5' },
          ],
        },
        {
          title: 'Оперативна пам’ять',
          options: [
            { value: '10 - 12ГБ' },
            { value: '16 - 24ГБ' },
            { value: '32ГБ і більше' },
            { value: '4ГБ' },
            { value: '6 - 8ГБ' },
          ],
        },
        {
          title: 'Операційна система',
          options: [
            { value: 'Chrome OS' },
            { value: 'Linux' },
            { value: 'Windows' },
            { value: 'Mac OS' },
            { value: 'Без ОС' },
          ],
        },
      ],
    },
    goodsList: [
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isNew: true,
        isFast: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFast: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
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
