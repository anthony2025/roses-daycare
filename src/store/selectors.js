export const getArticles = state => state.articles
export const getContactInfo = state => state.contactInfo
export const getPhone = state => state.contactInfo.phone
export const getEmail = state => state.contactInfo.email
export const getFullAddress = state =>
  `${state.contactInfo.address1}, ${state.contactInfo.address2}`
