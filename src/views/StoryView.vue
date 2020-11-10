<template>
  <div id="storyView">
      <b-container class="header p-5" fluid>
        <b-card class="header-card mt-5 mx-auto">
          <b-card-text>
            <small class="text-muted">CATEGORY | 2 DAYS AGO</small>
            <h2><strong>The horizon is consumed by flames.</strong></h2>
            <p class="text-muted">The reign of lunacy is coming soon</p>
          </b-card-text>
        </b-card>
      </b-container>

      <b-container id="content" class="my-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>

        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>

        <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>

        <p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. </p>

        <p>Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>
      </b-container>

      <div class="up-button my-4">
      <hr>
        <button type="button" class="btn btn-outline-secondary" v-on:click="scrollUp"><b-icon icon="arrow-up" scale="1.5"></b-icon></button>
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  name: 'story-view',
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    initialScroll() {
      window.scrollTo(0,0);
    }
  },
  mounted() {
    this.initialScroll();
  },
}
</script>

<style scoped>
.header {
  background-color: gray;
  background-image: url('https://picsum.photos/1366/400/?image=3');
  background-repeat: no-repeat;
  background-size: cover;
}

.header-card {
  border: none; 
  border-radius: 0; 
  max-width: 30rem;
  animation: slideInFromLeft 1s;
}

#content {
  font-size: 1.5em;
  animation: slideInFromBottom 0.6s;
}

.up-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.up-button > hr {
  flex: 1;
  border: none;
  height: 1px;
  background: gray;
}
</style>