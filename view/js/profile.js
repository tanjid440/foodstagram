import '../components/postCard.js'

window.addEventListener('load', () => {
  const postCard = document.createElement('post-card')
  postCard.post = 'hro'
  document.querySelector('.user-posts').appendChild(postCard)
  const postCard2 = document.createElement('post-card')
  postCard2.post = 'hro'
  document.querySelector('.user-posts').appendChild(postCard2)
})