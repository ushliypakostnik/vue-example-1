const operationsARR = [];

let template = {
  date: '2019-07-8T14:44:00',
  title1: 'ООО «Крохотные винтики»',
  title2: 'Тинькофф банк',
  title3: 'Сайт Крохотные винтики',
  title4: 'Разработка',
  title5: 'Расчет за разработку',
  status: 'Оплачено',
};
let price;
let title1;
let title3;
let title5;
for (let id = 4; id < 20; ++id) { // eslint-disable-line no-plusplus
  price = Number(((Math.random() * 100000) - (Math.random() * 100000)).toFixed(2));
  title1 = ['ООО «Животные»', 'Горводоканал', 'Марья Ильинична'][Math.floor((Math.random() * 100) / 33)];
  title3 = ['Сайт', 'ПО', 'Обслуживание'][Math.floor((Math.random() * 100) / 33)];
  title5 = ['Расчет за разработку', 'Премия', 'Простава'][Math.floor((Math.random() * 100) / 33)];
  template = Object.assign({ ...template, id, price, title1, title3, title5 });
  operationsARR.push(template);
}

const DATA = {
  pages: [
    {
      id: 1,
      item: 'operations',
      name: 'Операции',
    },
    {
      id: 2,
      item: 'reports',
      name: 'Отчеты',
    },
    {
      id: 3,
      item: 'counterparties',
      name: 'Контрагенты',
    },
    {
      id: 4,
      item: 'project',
      name: 'Проекты',
    },
    {
      id: 5,
      item: 'costs',
      name: 'Статьи расходов',
    },
    {
      id: 6,
      item: 'employees',
      name: 'Сотрудники',
    },
  ],
  user: {
    name: 'Андрей Никонов',
    ava: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
    company: 'Riverstart Digital',
    data: {
      values: [1930545.26, 1345511.26, 8797.41, 569156.26, 541356.47, 8797.41, 671099.11],
      operations: [
        {
          id: 1,
          date: '2019-07-10T07:24:00',
          price: 50239.17,
          title1: 'ИП Емельянов Антон Владимирович',
          title2: 'Тинькофф банк',
          title3: 'Сайт Volkswagen',
          title4: 'Продвижение',
          title5: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: 'Оплачено',
        },
        {
          id: 2,
          date: '2019-07-09T07:17:00',
          price: -200000,
          title1: 'Дмитрий Воропаев',
          title2: 'Тинькофф банк',
          title3: 'ИМ Bonafide',
          title4: 'Зарплата сотрудникам',
          title5: 'Аванс Июль',
          status: 'Оплачено',
        },
        {
          id: 3,
          date: '2019-07-8T14:44:00',
          price: 500000,
          title1: 'ООО «Большие турбины»',
          title2: 'Тинькофф банк',
          title3: 'Сайт Большие турбины',
          title4: 'Разработка',
          title5: 'Аванс за разработку',
          status: 'Оплачено',
        },
        ...operationsARR,
      ],
    },
  },
};

export default DATA;
