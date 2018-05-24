<template>
  <div class="Sidebar">
    <ul class="Sidebar__Container">
      <nuxt-link
        class="Sidebar__Link"
        tag="li"
        to="/collection" >
        <a>Collection</a>
      </nuxt-link>
      <nuxt-link
        class="Sidebar__Link"
        tag="li"
        to="/wishlist" >
        <a>Wishlist</a>
      </nuxt-link>
      <nuxt-link
        class="Sidebar__Link"
        tag="li"
        to="/about" >
        <a>About</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
</script>

<style>
.Sidebar {
  position: fixed;
  width: 96px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #1b1b1b;
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
  position: relative;
}

.Sidebar__Link::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #0053FF;
    border-radius: 4px;
    position: absolute;
    right: -4px;
    top: 0;
    bottom: 0;
    margin: auto;
    visibility: hidden;
}

.Sidebar__Link.nuxt-link-active {
  font-family: "IBMPlexMono-SemiBold";
  color: #0053FF;
  width: 100%;
  text-align: center;
  line-height: 96px;
}
.Sidebar__Link.nuxt-link-active:after {
    visibility: visible;
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
