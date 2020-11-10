<template>
  <div id="categories">
      <b-container>
        <h1 class="title text-center font-weight-light my-5">All Categories</h1>
        <b-card v-for="{ name, image, subtitle, description } in categories" :key="name" no-body class="category-card overflow-hidden my-4">
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img-lazy blank="true" :src="image" alt="Image" class="rounded-0"></b-card-img-lazy>
            </b-col>
            <b-col md="9">
              <b-card-body :title="name">
                <b-card-text>
                  <h5 class="text-muted">{{ subtitle }}</h5>
                  <hr>
                  <h5>{{ description }}</h5>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'categories',
  data() {
    return {
      categories: [
        { image: "https://picsum.photos/400/400/?image=1", name: "Main Flow", subtitle: "The core of the issue", description: "Stories pertaining to the main flow of things. Diaries and other assorted writing. If you're looking for the continuing version of the history, you should look into here." },
        { image: "https://picsum.photos/400/400/?image=2", name: "Article", subtitle: "Reporting after the facts", description: "Magazine articles and police reports wrote after the fact. Subjective and prone to bias, these should be taken with a grain of salt." },
        { image: "https://picsum.photos/400/400/?image=3", name: "History", subtitle: "The ever changing sand", description: "Historical accounts pertaining to the inumerous players involved in the happenings." },
      ],
      
    }
  }
}
</script>

<style scoped>
.title {
  animation: slideInFromTop 1s;
}

.category-card {
  height: 16rem;
}

.category-card:nth-child(odd) {
  animation: slideInFromRight 0.5s ease-in;
}

.category-card:nth-child(even) {
  animation: slideInFromLeft 0.5s ease-in;
}
</style>