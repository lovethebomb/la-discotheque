<template>
  <div class="Tracklist">
    <h3 class="Tracklist__Header">Tracklist</h3>
    <ul>
      <li
        v-for="track in tracklist"
        :key="track.position"
        class="Track">
        <span class="Track__Position">{{ track.position }}</span>
        <span class="Track__Title">{{ track.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tracklist: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>
.Tracklist {
  position: relative;
}

.Tracklist__Header {
  font-family: "bluu";
  font-size: 24px;
  position: absolute;
  transform: rotate(-90deg);
  top: 40px;
  left: -90px;
}

.Tracklist ul {
  list-style-type: none;
  padding: 0;
}

.Track {
  margin: 8px 0;
}

.Track__Position {
  color: #586366;
  font-size: 14px;
  margin-right: 16px;
  display: inline-block;
  min-width: 16px;
}

.Track__Title {
  display: inline-block;
}
</style>
