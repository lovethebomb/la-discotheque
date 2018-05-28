<template>
  <div class="Sidebar">
    <Logo />
    <ul class="Sidebar__Container">
      <li class="Sidebar__Group">
        <nuxt-link
          class="Sidebar__Link"
          tag="div"
          to="/collection" >
          <a>Collection</a>
        </nuxt-link>
        <nuxt-link
          class="Sidebar__Link"
          tag="div"
          to="/wishlist" >
          <a>Wishlist</a>
        </nuxt-link>
      </li>
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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>

<style>
.Sidebar {
  position: fixed;
  width: 96px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 40px;
}

.Sidebar__Container {
  display: flex;
  height: calc(100% - 140px);
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

.Sidebar .Logo {
  margin-left: 40px;
}
</style>
