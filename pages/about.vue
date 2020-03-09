<template>
  <article class="About">
    <p>
      <strong>La Discothèque</strong> is the lovechild of
      <a href="https://www.lucas.computer">Lucas Heymès</a> and
      <a href="https://www.inesdurao.me">Inês Durão</a>
    </p>
    <p>
      We decided to create this place so we could obnoxiously show-off how many
      cool records we have.
    </p>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: `About - La Discothèque - Discogs collection viewer`
    }
  }
}
</script>

<style>
.About {
  max-width: 345px;
  text-align: center;
  line-height: 21px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
@media screen and (max-width: 768px) {
  .About {
    margin-top: 40px;
    padding: 0 2em;
  }
}
</style>
