<template>
  <b-card no-body cols="4" img-top class="mb-4 story-card">
    <b-card-img-lazy v-bind="lazyProps" :src=(getImageUrl(story.image)) fluid/>
    <b-card-text class="text-center p-4">
    <p><small class="text-muted text-uppercase">{{story.category}} | {{story.date}}</small></p>
    <h4><strong>{{story.title}}</strong></h4>
    <p class="text-muted">{{story.subtitle}}</p>
    <b-link :to="{ name: 'StoryView', params: { id: story.id } }" class="stretched-link"></b-link>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'story-card',
  props: {
    story: {
      id: Number,
      image: String,
      category: String,
      date: String,
      title: String,
      subtitle: String
    },
  },
  data() {
    return {
      lazyProps: {
        blank: true,
        blankColor: '#000',
        width: 600,
        height: 300
      },
    };
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.lazyProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    },
  },
}
</script>

<style scoped>
.story-card {
  transition: .5s;
}

.story-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
</style>