<template>
  <div id="home">
    <!-- Header Story -->
    <b-container fluid class="header p-5">
        <b-card class="header-card m-5">
          <b-card-text>
            <p><small class="text-muted text-uppercase">{{stories[0].category}} | {{stories[0].date}}</small></p>
            <h2><strong>{{stories[0].title}}</strong></h2>
            <p class="text-muted">{{stories[0].subtitle}}</p>
            <b-link to="stories/1" class="stretched-link"></b-link>
          </b-card-text>
        </b-card>
    </b-container>

    <!-- Recent Stories -->
    <b-container class="stories-container">
      <h1 class="text-center font-weight-light my-5">Recent Stories</h1>
      <b-card-group deck>
        <StoryCard v-for="story in stories" :key="story.id" :story="story"/>
      </b-card-group>
    </b-container>

    <div class="plus-button my-4">
      <hr>
        <button type="button" class="btn btn-outline-secondary"><b-icon icon="plus" scale="1.5"></b-icon></button>
      <hr>
    </div>

  </div>
</template>

<script>
import StoryCard from '../components/StoryCard';

export default {
  components: {
    StoryCard
  },
  data() {
    return {
      stories: [
        { 
          id: 1,
          image: '24',
          title: 'The horizon is consumed by flames. Everyday life is starting to crumble.',
          subtitle: 'The end is starting. The reign of lunacy is coming soon.',
          category: 'Main Flow',
          date: '2 Days Ago'
        },
        { 
          id: 2,
          image: '25',
          title: 'Orange, Red and Yellow',
          subtitle: 'The colors of my childhood.',
          category: 'Article',
          date: '3 Days Ago'
        },
        { 
          id: 3,
          image: '26',
          title: 'Chrysalis Educational Complex',
          subtitle: 'The eclosion of childhood',
          category: 'History',
          date: '4 Days Ago'
        },
      ],
      lazyProps: {
        blank: true,
        blankColor: '#000',
        width: 600,
        height: 300
      }
    }
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.lazyProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    }
  }
}
</script>

<style scoped>
.header {
  background-color: gray;
  background-image: url('https://picsum.photos/1024/768/?image=24');
  background-repeat: no-repeat;
  background-size: cover;
}

.header-card {
  border: none;
  max-width: 30rem;
  animation: slideInFromLeft 1s;
}

.stories-container {
  animation: slideInFromBottom 0.5s;
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