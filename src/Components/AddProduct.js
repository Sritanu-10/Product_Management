import React, { useState } from "react";
import Productservice from "../Service/Productservice";




function AddProduct(){
    const[product,setproduct]=useState({
        productName:"",
        productDescription:"",
	    productBrand:"",
	    price:"",
	    status:""
    });
    const [msg, setMsg] = useState("");
    const handleChange=(e)=>{
        const value=e.target.value;
        setproduct({
            // productName: product.productName,
            // productBrand: product.productBrand,
            // price: product.price,
            // productDescription: product.productDescription,
            // status: product.status,
            ...product,
            [e.target.name]:value
        })
    }
    const productregister=(e)=>{
        e.preventDefault();

        // For testing
        // console.log(product)
        // console.log("Product Added Successfully");
        // setMsg("Product Added Sucessfully");
        // setproduct({
        //     productName:"",
        //     productDescription:"",
	    //     productBrand:"",
	    //     price:"",
	    //     status:""
        // });


        //For real case use
        Productservice.saveProduct(product)
        .then((res)=>{
            console.log("Product Added Successfully");
            setMsg("Product Added Sucessfully");
            setproduct({
                productName:"",
                productDescription:"",
	            productBrand:"",
	            price:"",
	            status:""
              });
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div className=" p-10 bg-orange-700">
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16"> 
            <h2 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">Add a New Product</h2>
            {msg && <p className="text-xl text-center text-green-500">{msg}</p>}

            <form action="#" onSubmit={(e)=>productregister(e)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="productName" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" name="productName" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" onChange={(e)=>handleChange(e)} 
                  value={product.productName}/>
              </div>
              <div className="w-full">
                  <label htmlFor="productBrand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input type="text" name="productBrand" id="productBrand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" onChange={(e)=>handleChange(e)}
                  value={product.productBrand}/>
              </div>
              <div className="w-full">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="₹2999" required="" onChange={(e)=>handleChange(e)}
                  value={product.price}/>
              </div>
              <div>
                  <label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select name="productDescription" id="productDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " onChange={(e)=>handleChange(e)}
                  value={product.productDescription}>
                      <option value="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="Gaming Console">Gaming/Console</option>
                      <option value="Mobile Phone">Phones</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                  <select name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={(e)=>handleChange(e)} value={product.status}>
                      <option value="">Select category</option>
                      <option value="Available">In-Stock</option>
                      <option value="NotAvailable">Out-of-Stock</option>
                  </select>
                  {/* <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/> */}
              </div> 
              {/* <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div> */}
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-orange-800 dark:border-white">
              Add product
            </button>
        </form>
        </div>
    </section>
    </div>
    )
}
export default AddProduct