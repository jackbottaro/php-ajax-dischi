console.log('Vue ok', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        search: '',
        albums: []
    },
    methods: {
        searchApi() {
            axios.get(`http://localhost/php-ajax-dischi-1/api/albums/api/albums?search=${this.search}`).then(res => {
                this.albums = res.data;
            }).catch(err => { console.error(err) })
        }
    },
    mounted() {
        this.searchApi();
    }
});
