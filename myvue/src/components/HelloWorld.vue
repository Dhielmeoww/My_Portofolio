<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <component :is="postingan"></component>
    </div>
    <component :is="buat - postingan"></component>


    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="">BTPN Syariah</a>
      </div>
    </div>
    <ul class="nav navbar-nav">
      <li>
        <a href="#">Postingan</a>
      </li>
      <li>
        <a href="#">Buat Postingan</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
