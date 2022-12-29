import React from 'react'

export default function ProductForm() {
    return (
        <div className="row w-100 h-100">
            <div className="col-4" />
            <div className="col-4">
                <form className="bg-white mb-4 ">
                    <div className="row d-block w-100 h-75 text-center p-5">
                        <h1 className="mb-2 text-primary text-nowrap">Product Adding</h1>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Drink Name</label>
                            <input type="text" className="form-control my-2" id="inputDrinkName" placeholder="Drink Name" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Price</label>
                            <input type="text" className="form-control my-2" id="inputPrice" placeholder="Price" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Image</label>
                            <input type="file" className="form-control my-2" id="validatedCustomFile" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputState">Category</label>
                            <select id="inputState" className="form-control my-2">
                                <option selected>Choose...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-4" />
        </div>
    )
}
