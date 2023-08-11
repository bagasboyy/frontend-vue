<template>
  <div>
  <b-card no-body class="text-center">
    <div class="bg-secondary text-light">
      This is some content without the default <samp>&lt;b-card-body&gt;</samp> section. Notice the
      lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
</div>
</template>

<script>
// import axios from 'axios'
// import { onMounted, ref } from 'vue'
export default {
  //     setup() {
  // //reactive state
  // let posts = ref([])
  // //mounted
  // onMounted(() => {
  //    //panggil function "getDataPosts"
  //    getDataPosts()
  // })
  // //function "getDataPosts"
  // function getDataPosts() {
  //     //get API from Express Backend
  //     axios.get('http://localhost:3000/api/posts')
  //     .then(response => {
  //       //assign state posts with response data
  //       posts.value = response.data.data
  //     }).catch(error => {
  //         console.log(error.response.data)
  //     })
  // }
  // //return
  // return {
  //     posts,
  //     getDataPosts,
  // }
  // }
};
</script>

<style>
/* body {
  background-color: lightgray !important;
}
.mt-custom {
  margin-top: 110px;
}
.b {
  fill: aqua;
} */
</style>
