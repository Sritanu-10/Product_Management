import axios from "axios"
const API_URL="http://localhost:8080"
function ProductService() {
    function saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    function getAllProduct() {
        return axios.get(API_URL + "/");
    }

    function getProductById(id) {
        return axios.get(API_URL + "/"+id);
    }
    function deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id);
    }
    function editProduct(product){
        return axios.post(API_URL+"/editProduct/"+product.id,product)
    }

    return {
        saveProduct,
        getAllProduct,
        getProductById,
        deleteProduct,
        editProduct
    };
}
// class ProductService {

//     saveProduct(product) {
//         return axios.post(API_URL + "/saveProduct", product);
//     }

//     getAllProduct() {
//         return axios.get(API_URL + "/");
//     }

//     getProductById(id) {
//         return axios.get(API_URL + "/" + id);
//     }

//     deleteProduct(id) {
//         return axios.get(API_URL + "/deleteProduct/" + id);
//     }

//     editProduct(product) {
//         return axios.post(API_URL + "/editProduct/" + product.id, product);
//     }

// }
const productService = new ProductService();
export default productService