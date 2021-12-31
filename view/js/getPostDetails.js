import '../components/commentCard.js'

window.addEventListener('load', () => {
  const commentCard = document.createElement('comment-card')
  commentCard.comment = 'hro'
  document.querySelector('.comment-list').appendChild(commentCard)
  const commentCard2 = document.createElement('comment-card')
  commentCard2.comment = 'hro'
  document.querySelector('.comment-list').appendChild(commentCard2)
})