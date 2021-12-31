class TopHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
      .brand-title {
        font-size: 1.8rem;
        font-weight: 900;
        color: dodgerblue;
        text-decoration: none;
        cursor: pointer;
      }
      .header-container {
        display: flex;
        padding: 0px 100px;
        height: 80px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 4px solid #eee;
      }
      .header-nav-menu ul {
        display: flex;
        margin: 0;
        padding: 0;
      }
      .header-nav-menu ul li {
        list-style: none;
        padding: 0px 8px;
        font-size: 1rem;
        font-weight: bold;
      }
      a {
        color: dodgerblue;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .header-nav-menu ul li .logout-btn {
        border: none;
        background-color: white;
        color: red;
        cursor: pointer;
      }
    </style>
    <div class="header-container">
      <a href="/" class="brand-title">Foodstagram</a>
      <span class="header-nav-menu">
        <ul>
          <li><a href="/profile.html">My Profile</a></li>
          <li><a class="logout-btn" href="/logout.html">Logout</a></li>
        </ul>
      </span>
    </div>
    `;
  }
}

customElements.define("top-header", TopHeader);
