<template>
  <b-container-fluid>
    <!-- Header Story -->
    <section class="header p-5">
        <b-card style="border: none; max-width: 30rem;" class="straight-border m-4">
          <b-card-text>
            <p><small class="text-muted text-uppercase">{{stories[0].category}} | {{stories[0].date}}</small></p>
            <h2><strong>{{stories[0].title}}</strong></h2>
            <p class="text-muted">{{stories[0].subtitle}}</p>
          </b-card-text>
        </b-card>
    </section>

    <!-- Recent Stories -->
    <b-container>
      <h1 class="text-center font-weight-light my-5">Recent Stories</h1>
      <b-card-group deck>
        <b-card v-for="story in stories" :key="story.id" :img-src="story.image" img-top class="straight-border mb-4">
          <b-card-text class="text-center">
            <p><small class="text-muted text-uppercase">{{story.category}} | {{story.date}}</small></p>
            <h4><strong>{{story.title}}</strong></h4>
            <p class="text-muted">{{story.subtitle}}</p>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>

    <div class="plus-button my-4">
      <hr>
        <button type="button" class="btn btn-outline-secondary"><b-icon icon="plus" scale="1.5"></b-icon></button>
      <hr>
    </div>

  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        { 
          id: 1,
          image: 'https://picsum.photos/600/300/?image=24',
          title: 'The horizon is consumed by flames. Everyday life is starting to crumble.',
          subtitle: 'The end is starting. The reign of lunacy is coming soon.',
          category: 'Main Flow',
          date: '2 Days Ago'
        },
        { 
          id: 2,
          image: 'https://picsum.photos/600/300/?image=26',
          title: 'Orange, Red and Yellow',
          subtitle: 'The colors of my childhood.',
          category: 'Article',
          date: '3 Days Ago'
        },
        { 
          id: 3,
          image: 'https://picsum.photos/600/300/?image=27',
          title: 'Chrysalis Educational Complex',
          subtitle: 'The eclosion of childhood',
          category: 'History',
          date: '4 Days Ago'
        },
      ]
    }
  }
}
</script>

<style scoped>
.header {
  background-image: url('https://picsum.photos/1024/768/?image=24');
  background-repeat: no-repeat;
  background-size: cover;
}

.straight-border {
  border-radius: 0;
}

.plus-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus-button > hr {
  flex: 1;
  border: none;
  height: 1px;
  background: gray;
}
</style>