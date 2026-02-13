function AddProduct() {
  const handleChange = (e) => {};

  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 ">Welcome to your product manager</h1>

      <div className="row  justify-content-center">
        <div className="col-md-8">
          <div className="card shaddow">
            <div className="card-body">
              <h5 className="card-title">Add a product</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Description
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={FormData.image}

                    
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
