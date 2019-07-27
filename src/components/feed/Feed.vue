<template>
  <main role="main">
    <ul>
      <li
        v-for="item in items"
        v-bind:key="item.id"
      >{{ item.price }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Feed',

  components: {
  },

  data: () => ({
    items: [
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
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

</style>
