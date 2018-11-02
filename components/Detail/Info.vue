<template>
  <div class="Info">
    <p class="Info__Extra btn">{{ country }} {{ year }}</p>
    <DetailTitle
      :album="album"
      :artist="artist"
      class="Info__Title" />
    <p class="Info__Label">{{ labelText }}</p>
    <p class="Info__Format">{{ formatText }}</p>
    <p class="Info__Genre">{{ genres }}</p>
    <p class="Info__Styles">{{ styles }}</p>

    <a
      :href="discogsURI"
      class="btn Info__DiscogsLink"
      target="_blank"
      rel="noopener"
    >See on Discogs</a>
  </div>

</template>

<script>
import DetailTitle from '~/components/Detail/Title';

export default {
  components: {
    DetailTitle
  },
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  computed: {
    album() { return this.release.title ?
      this.release.title :
      "Album";
    },
    artist() { return this.release.artists ?
      this.release.artists.map(artist => artist.name).join(', ') :
      "Artist";
    },
    country() { return this.release.country },
    discogsURI() { return this.release.uri },
    formatText() {
      if (this.release.formats) {
        const format = this.release.formats[0];
        const description = format.descriptions.join(' ');
        if (this.release.format_quantity >= 2) {
          return `${this.release.format_quantity}x${description}`;
        }
        return description;
      }
      return "Formats";
    },
    labels() { return this.release.labels ?
      this.release.labels.map(label => label.name).join(', ') :
      "Labels";
    },
    labelText() {
      if (this.release.labels) {
        // TODO handle multiple labels/numbers
        const label = this.release.labels[0];
        return `${label.name} - ${label.catno}`;
      }
      return ""
    },
    genres() { return this.release.genres ?
      this.release.genres.join(', ') :
      "Genres";
    },
    styles() { return this.release.styles ?
      this.release.styles.join(', ') :
      "Styles";
    },
    year() { return this.release.year }
  }
}
</script>

<style lang="css">


.Info {
  max-width: 400px;

  .Info__Extra {
    font-size: 12px;
  }

  .Info__Title {
    margin: 1em auto
  }

  .Info__DiscogsLink {
    font-size: 14px;
    color: var(--colorWhite);
    text-decoration: none;
    margin-top: 2em;
    padding: 0.6em 0.5em 0.5em;

    &:hover {
      color: var(--colorBlue);
    }
  }

  & > p {
    color: var(--colorGrey);
    font-size: 14px;
    line-height: 1.4em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 90%;
  }
}
</style>
