export const specialtyTexts = {
  notFound: "Спеціальність не знайдена",
  minScore: "Мін бал НМТ 2023:",
  budgetPlaces: "Бюджетних місць:",
  totalPlaces: "Ліцензійний обсяг:",
  fullTimeCost: "Вартість денної форми:",
  partTimeCost: "Вартість заочної форми:",
  programTitle: "Програма",
  careersTitle: "Кар'єрні можливості",
  alumniTitle: "Наші випускники",
};

export const specialties = [
  {
    slug: '121',
    title: 'Інженерія програмного забезпечення',
    degree: 'Бакалавр',
    minBudgetScore2023: '131 бал',
    budgetPlaces: '56 бюджетників',
    totalPlaces: '120 місць',
    costFullTime: '3 290 грн/міс',
    costPartTime: '1 900 грн/міс',
    description:
      'Спеціальність "Інженерія програмного забезпечення" спрямована на підготовку висококваліфікованих фахівців у галузі розробки та підтримки програмного забезпечення. Студенти навчаються проектувати, розробляти, тестувати, впроваджувати та підтримувати програмні продукти, а також вивчають сучасні методології, технології та інструменти програмування.\n\nДізнатися більше про кафедру',

    programs: [
      'Наша програма навчання',
      'Освітні траєкторії',
      'Освітні програми',
    ],

    careers: [
      {
        title: 'Web Developer',
        salary: '$600–900',
        description:
          'Займається написанням застосунків, сайтів і окремих елементів, з використанням різних мов програмування (PHP, JS, JAVA та інші)',
      },
      {
        title: 'QA Tester',
        salary: '$500–700',
        description:
          'Тестує готове програмне забезпечення на наявність багів та виправляє їх у разі, якщо дозволяють його фахові компетенції.',
      },
      {
        title: 'UX/UI Designer',
        salary: '$500–800',
        description:
          'Спеціаліст, який займається проектуванням інтерфейсів користувача.',
      },
      {
        title: 'Business Analytic',
        salary: '$550–800',
        description:
          'Фахівець, який відповідає за збір, аналіз та інтерпретацію складних наборів даних, щоб допомогти компаніям ухвалювати обґрунтовані рішення для ведення бізнесу.',
      },
    ],

    alumni: [
      {
        name: 'Ігор Шубін',
        role: 'TL/Senior .Net Developer',
        company: 'Sigma Software Group',
      },
      {
        name: 'Юлія Воронько',
        role: '.Net Developer',
        company: 'Sigma Software Group',
      },
      {
        name: 'Ілля Міщенко',
        role: 'Group Leader in PHP Department',
        company: 'NIX Solutions',
      },
      {
        name: 'Соколов Микита',
        role: 'Development Lead',
        company: 'DBBest Technologies LLC',
      },
      {
        name: 'Станіслав Орленко',
        role: 'Software Developer',
        company: 'Sigma Software Group',
      },
      {
        name: 'Олександр Соломкін',
        role: '.NET Developer',
        company: 'Sigma Software Group',
      },
    ],
  },
];
