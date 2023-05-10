<template>
  <div class="flex flex-col text-center">
    <div>
      <input type="text" v-model="name" /> 
    </div>
    <div>
      <h4>Name: {{ name }}</h4>
    </div>
  </div>
</template>
  <script>
    export default {
      data() {
        return {
          name: "",
        };
      },
    };
  </script>

