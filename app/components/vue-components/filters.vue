<template>
  <div>
    <form @submit.prevent="search()" class="c-filters_form">
      <div class="c-filters_group">
        <label for="search">Search:</label>
        <input
          type="text"
          v-model="filter"
          name="search"
          placeholder="Employee name"
        />
      </div>

      <button class="c-filter-btn primary" type="submit">Search</button>
      <button class="c-filter-btn light" @click="clear" type="click">Clear</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FiltersComponent",
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    search() {
      this.$emit('search', this.filter )
    },
    clear() {
      this.$emit('clear')
      this.filter = ''
    },
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search),
      employee = urlParams.get('employee');
    if(employee){
     this.filter = employee
     this.search()
    }
  },
};
</script>
