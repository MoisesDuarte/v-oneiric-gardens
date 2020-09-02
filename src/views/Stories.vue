<template>
  <div id="stories">
      <b-container>
        <h1 class="text-center font-weight-light my-5">All Stories</h1>
        <div class="my-grid">
          <StoryCard v-for="story in stories" :key="story.id" :story="story" />
        </div>

         <div class="mt-3">
          <b-pagination v-model="currentPage" pills :total-rows="rows" size="lg" align="center"></b-pagination>
        </div>


    </b-container>
  </div>
</template>

<script>
import StoryCard from '../components/StoryCard'

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
          title: 'The horizon is consumed by flames.',
          subtitle: 'The end is starting. The reign of lunacy is coming soon.',
          category: 'Main Flow',
          date: '2 Days Ago'
        },
        { 
          id: 2,
          image: '26',
          title: 'Orange, Red and Yellow',
          subtitle: 'The colors of my childhood.',
          category: 'Article',
          date: '3 Days Ago'
        },
        { 
          id: 3,
          image: '27',
          title: 'Chrysalis Educational Complex',
          subtitle: 'The eclosion of childhood',
          category: 'History',
          date: '4 Days Ago'
        },
        { 
          id: 4,
          image: '28',
          title: 'The Apocalypse Rally',
          subtitle: 'A tool of frustration',
          category: 'Article',
          date: '4 Days Ago'
        },
        { 
          id: 5,
          image: '29',
          title: 'Life in the 26th Ward',
          subtitle: 'Suburban everyday life in the 26th ward',
          category: 'History',
          date: '6 Days Ago'
        },
        { 
          id: 5,
          image: '30',
          title: 'Layman Terms',
          subtitle: 'Respite from everyday life in the lies of the present',
          category: 'Article',
          date: '6 Days Ago'
        },
      ],
      rows: 100,
      currentPage: 1
    }
  }
}
</script>

<style>
.my-grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1.5rem;
}

.my-grid > * {
  width: 100%;
  max-width: 20rem;
}
</style>