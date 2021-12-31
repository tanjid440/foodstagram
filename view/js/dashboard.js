import '../components/postCard.js'

window.addEventListener('load', () => {
  const postCard = document.createElement('post-card')
  postCard.post = 'hro'
  document.querySelector('.main').appendChild(postCard)
  const postCard2 = document.createElement('post-card')
  postCard2.post = 'hro'
  document.querySelector('.main').appendChild(postCard2)
})