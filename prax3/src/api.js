class Api {
    constructor() {
        this.url = process.env.BASE_URL;
    }
    async getData() {
       return  await fetch(this.url + "/api/products.json").then(stream => stream.json())
           .catch(error => console.error(error));
    }
}

export default Api;