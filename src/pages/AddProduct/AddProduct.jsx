import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockQuantity = form.stockQuantity.value;

    const product = {
      name,
      category,
      image,
      price,
      description,
      customization,
      processingTime,
      stockQuantity,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your product has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    form.reset();
  };
  return (
    <div className="py-10 max-w-md mx-auto">
      <div className=" text-white p-8  mt-16 space-y-3 rounded-x  bg-gray-800 mx-auto">
        <h1 className="text-2xl font-bold text-center">Add Product</h1>
        <form
          onSubmit={handleAddProduct}
          noValidate=""
          action=""
          className="space-y-3 "
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="image"
              placeholder="image"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="customization"
              placeholder="Customization"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="processingTime"
              placeholder="Processing Time"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="stockQuantity"
              placeholder="stock Quantity"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
            ADD-PRODUCT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
