export default {
  name: 'SearchComponent',
  data() {
    return {
      search_input: "",

    }
  },
  methods: {
    submit_search(){
      this.$router.push('/search/'+this.search_input);
    }
  }
}