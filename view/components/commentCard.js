class CommentCard extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  set comment(comment) {
    this.shadow.innerHTML = `
      <style>
      .comment-card {
        margin-bottom: 16px;
        border: 1px solid #999;
        padding: 8px 16px;
        border-radius: 4px;
        background-color: white;
        padding-bottom: 12px;
      }
      .author {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #777;
      }
      .name {
        font-size: 0.95rem;
        font-weight: 600;
        margin-right: 16px;
      }
      .time {
        font-size: 0.8rem;
        color: #222;
      }
      .content {
        margin-left: 16px;
      }
    </style>
    <div class="comment-card">
      <div class="author">
        <div class="name">User Name</div>
        <div class="time">Time</div>
      </div>
      <div class="content">Content</div>
    </div>
    `;
  }

}

customElements.define('comment-card', CommentCard)