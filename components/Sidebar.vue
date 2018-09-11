<template>
  <transition
    :css="false"
    @beforeEnter="beforeEnter"
    @enter="enter">
    <div
      v-show="isVisible"
      class="Sidebar"
      role="navigation">
      <Logo />
      <ul class="Sidebar__Container">
        <li class="Sidebar__Group">
          <nuxt-link
            class="Sidebar__Link"
            tag="div"
            to="/collection"
            @click.native="onClick">
            <a>Collection</a>
          </nuxt-link>
          <nuxt-link
            class="Sidebar__Link"
            tag="div"
            to="/wishlist"
            @click.native="onClick">
            <a>Wishlist</a>
          </nuxt-link>
        </li>
        <nuxt-link
          class="Sidebar__Link"
          tag="li"
          to="/about"
          @click.native="onClick">
          <a>About</a>
        </nuxt-link>
      </ul>
    </div>
  </transition>
</template>

<script>
import { TweenLite, Power4 } from 'gsap';

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  computed: {
    isVisible() {
      if (!this.isMobile) {
        return true
      }

      return this.$store.state.sidebarOpened
    },
    isMobile() {
      return this.$store.state.isMobile
    }
  },
  methods: {
    onClick(e) {
      if (this.isMobile) {
        this.$store.commit('SET_SIDEBAR_VISIBLE', false)
      }

      return true;
    },
    // Animations
    beforeEnter(el) {
      TweenLite.set(el, {
        y: 40,
        opacity: .01
      })
    },
    enter(el, done) {
      TweenLite.to(el, .35, {
        y: 0,
        opacity: 1,

        ease: Power4.easeOut,
        onComplete: () => {
          done()
        }
      })
    }
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
  z-index: 10;
  padding-top: 40px;

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

    &.nuxt-link-active {
      font-family: "IBMPlexMono-SemiBold";
      color: #0053FF;
      width: 100%;
      text-align: center;
      line-height: 96px;
    }

    &.nuxt-link-active:after {
      visibility: visible;
    }

    &:last-of-type {
      font-family: "IBMPlexMono-SemiBold";
      align-self: flex-end;
    }


    a {
      display: block;
      color: inherit;
      text-decoration: none;
      transform: rotate(-90deg);
      transform-origin: center;

      &:hover {
        color: var(--colorBlue);
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .Logo {
    margin-left: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    background: var(--colorBackground);

    .Logo {
      margin: 40px auto ;
    }

    .Sidebar__Container {
      height: auto;
      flex-flow: column-wrap;
    }

    .Sidebar__Group {
      width: 100%;
    }

    .Sidebar__Link {
      padding: 0;

      a {
        transform: none;
      }
    }
  }
}
</style>
