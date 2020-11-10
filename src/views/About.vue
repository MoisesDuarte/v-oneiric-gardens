<template>
  <div id="about">
      <b-container fluid class="header text-center">
        <b-avatar class="my-5" size="20em"></b-avatar>
      </b-container>

      <b-container class="m-from-header">
        <h1 class="text-center text-muted display-4 mb-4">Hello, my name is Nameless</h1>
        <h3 class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, odio vel tempus porttitor, ligula lacus commodo ligula, id eleifend leo orci ac nulla. Suspendisse potenti. Nunc turpis ex, rutrum at erat a, blandit elementum massa. Cras cursus, mi non sodales gravida, eros lacus maximus ligula, nec faucibus eros risus id ex. Vivamus rutrum urna et massa elementum, ut cursus dui commodo. Nulla vitae ligula et diam tempus finibus a et lorem.</h3>

        <h1 class="text-center text-muted display-4 my-5">Contact Me</h1>
        <b-form>
          <b-form-group>  
            <b-form-input type="email" placeholder="E-mail" required />
          </b-form-group>
          
          <b-form-group>
            <b-form-textarea placeholder="Message" rows="6" max-rows="6" />
          </b-form-group>

          <b-button class="mb-4" block>Send</b-button>

        </b-form>
      </b-container>
      

  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style scoped>
.header {
  background-color: gray;
  background-image: url('https://picsum.photos/1366/300/?image=3');
  background-repeat: no-repeat;
  background-size: cover;
  height: 18em;
}

.m-from-header {
  margin-top: 8em;
  animation: slideInFromBottom 0.3s;
}
</style>