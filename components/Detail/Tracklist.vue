<template>
  <div class="Tracklist">
    <div class="Tracklist__Header">
      <h3>Tracklist</h3>
      <img src="/img/svg/Tracklist-img.svg" >
    </div>
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

<style lang="postcss">
.Tracklist {
  position: relative;
}

.Tracklist__Header {
  font-family: "bluu";
  font-size: 24px;
  position: absolute;
  top: 0px;
  left: -32px;

  h3 {
    visibility: hidden;
    height: 0;
  }
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 80%;
}
</style>
