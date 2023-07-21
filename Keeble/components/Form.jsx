
import Link from "next/link";

const Form = ({type, product, setProduct, submitting, handleSubmit}) => {
    return (
        <section className="w-50 flex-start flex-col mx-8 my-4 bg-carolina-blue rounded-xl px-10 py-6">
            <h1 className="bold text-left">
                <span className="font-roboto-800 font-extrabold text-3xl">{type} Product</span>
            </h1>
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-5">

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Name:</span>
                    <textarea 
                        value={product.name} 
                        onChange={(e) => setProduct({...product, name: e.target.value})} 
                        placeholder="Enter the product name here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Description:</span>
                    <textarea 
                        value={product.description} 
                        onChange={(e) => setProduct({...product, description: e.target.value})} 
                        placeholder="Enter the product description here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Price:</span>
                    <input 
                        type="number"
                        value={product.price} 
                        onChange={(e) => setProduct({...product, price: e.target.value})} 
                        placeholder="Enter the product price here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Category:</span>
                    <input 
                        value={product.category} 
                        onChange={(e) => setProduct({...product, category: e.target.value})} 
                        placeholder="Enter the product category here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Link:</span>
                    <input 
                        value={product.link} 
                        onChange={(e) => setProduct({...product, link: e.target.value})} 
                        placeholder="Enter the product link here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product File Name: 
                    <span className="font-light">(Do not mispell and also add .png etc)</span>
                    </span>
                    <input 
                        value={product.fileName} 
                        onChange={(e) => setProduct({...product, fileName: e.target.value})} 
                        placeholder="Enter the product file name here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
                </label>

                <div className="flex gap-4 justify-between mt-5">
                    <Link href="/" className="text-lg bg-mulled-wine text-titan-white rounded-xl px-2 py-1">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="text-lg bg-mulled-wine text-titan-white rounded-xl px-2 py-1">
                            {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form;