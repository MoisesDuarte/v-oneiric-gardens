<template>
  <div>
    <b-row class="mx-3 mb-3">
      <b-input-group size="lg">
        <b-form-input v-model="searchString" placeholder="Insert name, category..."></b-form-input>
        <b-input-group-append>
          <b-button variant="primary">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-row>
    <b-row class="mx-3">
      <b-col class="pl-0 mb-3" sm="12" md="6">
        <b-form-input size="lg" type="date"></b-form-input>
      </b-col>
      <b-col class="px-0 mb-5" sm="12" md="6">
        <b-form-select v-model="searchCategory" :options="categories" size="lg">
          <template #first>
            <b-form-select-option :value="null" disabled>Select a category</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'search-form',
  data() {
    return {
      searchString: '',
      searchDate: '',
      searchCategory: null,
      categories: [
        { value: 'main_flow', text: 'Main Flow' },
        { value: 'article', text: 'Article' },
        { value: 'history', text: 'History' },
      ],
    }
  }
}
</script>

<style>

</style>