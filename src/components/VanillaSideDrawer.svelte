<script>
  import {MDCTopAppBar} from "@material/top-app-bar";
  const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
  let drawer = {
    open: true
  }
  // topAppBar.setScrollTarget(document.getElementById('main-content'));
  // topAppBar.listen('MDCTopAppBar:nav', () => {
  //   drawer.open = !drawer.open;
  // });
</script>

<header class="mdc-top-app-bar app-bar" id="app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
      <span class="mdc-top-app-bar__title">Dismissible Drawer</span>
    </section>
  </div>
</header>
<aside class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
  <div class="mdc-drawer__content">
    <div class="mdc-list">
      <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
        <span class="mdc-list-item__text">Inbox</span>
      </a>
      <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
        <span class="mdc-list-item__text">Outgoing</span>
      </a>
      <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
        <span class="mdc-list-item__text">Drafts</span>
      </a>
    </div>
  </div>
</aside>

<div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
  <main class="main-content" id="main-content">
    App Content
  </main>
</div>
