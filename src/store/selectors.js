export const getArticles = state => state.articles
export const getPeople = state => state.people
export const getIntro = state => state.intro
export const getCarouselImages = state => state.carouselImages
export const getThumbnailImages = state => state.thumbnailImages
export const getContactInfo = state => state.contactInfo
export const getPhone = state => state.contactInfo.phone
export const getEmail = state => state.contactInfo.email
export const getFullAddress = state =>
  `${state.contactInfo.address1}, ${state.contactInfo.address2}`
