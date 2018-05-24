<template>
  <div class="Sidebar">
    <ul class="Sidebar__Container">
      <li class="Sidebar__Link is-active">
        <nuxt-link to="/collection" >Collection</nuxt-link>
      </li>
      <li class="Sidebar__Link">
        <a href="#" >Wishlist</a>
      </li>
      <li class="Sidebar__Link">
        <a href="#" >About</a>
      </li>
    </ul>
  </div>
</template>

<style>
.Sidebar {
  position: fixed;
  width: 96px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #1b1b1b;
  overflow: hidden;
}

.Sidebar__Container {
  display: flex;
  height: 100%;
  flex-flow: row wrap;
  align-items: center;
}

.Sidebar__Link {
  font-family: "IBMPlexMono-Regular";
  width: 100%;
  text-align: center;
  line-height: 96px;
  padding: 1em 0;
}

.Sidebar__Link.is-active {
  font-family: "IBMPlexMono-SemiBold";
  color: #0053FF;
  width: 100%;
  text-align: center;
  line-height: 96px;
}

.Sidebar__Link:last-of-type {
  font-family: "IBMPlexMono-SemiBold";
  align-self: flex-end;
}

.Sidebar__Link a {
  display: block;
  color: inherit;
  text-decoration: none;
  transform: rotate(-90deg);
  transform-origin: center;
}

.Sidebar ul {
  list-style-type: none;
  padding: 0;
}


</style>
