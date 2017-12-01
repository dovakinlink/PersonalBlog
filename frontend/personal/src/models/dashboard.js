
export default {
  namespace: 'dashboard',
  state: {
    figurecard: [
      {
        icon: 'book',
        title: 'Bookings',
        number: 184,
        color: 'green',
        sub: 'Get More Space...',
        subIcon: 'info-circle'
      }, {
        icon: 'eye-o',
        title: 'Views',
        number: 75,
        color: 'pink',
        sub: 'Google Analytics',
        subIcon: 'tag'
      }, {
        icon: 'bank',
        title: 'Revenue',
        number: 3245,
        color: 'blue',
        sub: 'Last 24 Hours',
        subIcon: 'calendar'
      }, {
        icon: 'team',
        title: 'Followers',
        number: 245,
        color: 'yellow',
        sub: 'Just Updated',
        subIcon: 'solution'
      }
    ],
    imagecard: [
      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '2',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'London, UK'
      },
      {
        image: '3',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '4',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'Peiking, China'
      },
      {
        image: '5',
        title: '热气球啊啊',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '6',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      }
    ]
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {

  },
  reducers: {

  }
}
