class PostCard extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  set post(post) {
    this.shadow.innerHTML = `
      <style>
      .post {
        width: 600px;
        height: fit-content;
        background-color: white;
        padding: 16px;
        margin: 16px;
        border-radius: 4px;
      }
      .post-header {
        height: 70px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
      }
      .name {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .post-details {
        font-size: 0.8rem;
        color: #999;
      }
      .post-section {
        padding: 16px;
      }
      .post-img {
        width: 100%;
      }
      .comment {
        display: flex;
        flex-direction: column;
      }
      .comment button {
        margin-top: 8px;
        border: 1px solid dodgerblue;
        color: dodgerblue;
        background-color: white;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
      }
      .comment button:hover {
        background-color: #eee;
      }
    </style>
    <div class="post">
      <div class="post-header">
        <div>
          <div class="name">
            UserName
          </div>
          <div class="post-details">
            Location,&nbsp;Time
          </div>
        </div>
        <div class="comment">
          comments
          <a href='/post-details.html'>Add new comment</a>
        </div>
      </div>
      <div class="post-section">
        post-section
      </div>
      <div class="post-img">
        <img class="post-img" src="./assets/default.jpg" />
      </div>
    </div>
    `;
  }
}

customElements.define('post-card', PostCard)