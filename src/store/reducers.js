const initialState = {
  contactInfo: {
    address1: '6020 Franconia Rd',
    address2: 'Springfield VA 22150',
    email: 'rosesdaycare@gmail.com',
    facebook: 'facebook.com/rosesdaycare',
    phone: '571 219 1442'
  },
  articles: {
    5e65: {
      image: '/stock/img4.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Making Homemade Clay'
    },
    f82a: {
      image: '/stock/img6.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Hopscotch Championship'
    }
  }
}

export default (state = initialState, preloadedState) => {
  return state
}
