
let api = {
    url: process.env.BASE_URL + 'api/data.json',
    getData: function() {
       return fetch(this.url).then(response => response.json()).catch(e => console.log(e));
    }
};

api.getData.bind(api);

export default api;