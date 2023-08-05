import Link from "next/link";
import "@uploadthing/react/styles.css";
import { useState, useEffect } from "react";
import { UploadButton } from "/utils/uploadthing";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FilterBar = ({ categorySelected, handleSelection }) => {
    const categories = ["Base", "100%", "TKL", "75%", "65%", "60%", "Switches", "Tactile", "Linear", "Clicky", "3-pins", "5-pins", 
                        "Keycaps", "PBT", "ABS", "Doubleshot", "Pudding", "OEM", "Cherry", "DSA", "Accessories", "Cable", "Foam", "Lubricant",
                        "PCB", "Carrying Case", "Pullers", "Others", "$", "$$", "$$$"];
    return (
        <Stack direction="row" useFlexGap flexWrap="wrap" alignItems="center" spacing="2" justifyContent='flex-start'> 
            {categories.map(category => {
                return (
                    <Chip
                        label={category}
                        color={categorySelected.includes(category) ? "primary" : "default"}
                        onClick={() => handleSelection(category)}
                    />
                )
            })}
        </Stack>
    );
};

const ProductForm = ({ type, product, setProduct, submitting, handleSubmit, categorySelected, setcategorySelected }) => {
    const handleSelection = (filter) => {
        const isSelected = categorySelected.includes(filter);
        if (isSelected) {
            setcategorySelected(
                categorySelected.filter((selectedFilter) => selectedFilter !== filter)
            );
        } else {
            setcategorySelected([...categorySelected, filter]);
        }
    };
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
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        placeholder="Enter the product name here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Description:</span>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Enter the product description here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Price:</span>
                    <input
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Enter the product price here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Category:</span>
                    {/* FilterBar */}
                    <div className="flex place-content-center mt-2">
                        <FilterBar categorySelected={categorySelected} handleSelection={handleSelection} />
                    </div>

                    <input
                        value={categorySelected}
                        placeholder="Enter the primary category here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Product Link:
                        <span className="font-light">(Add the link to the site that sells it)</span>
                    </span>
                    <input
                        value={product.productLink}
                        onChange={(e) => setProduct({ ...product, productLink: e.target.value })}
                        placeholder="Enter the product link name here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Image Link:
                        <span className="font-light">(Add the link to s3 URL where image is stored)</span>
                    </span>

                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res);
                            console.log("Files: ", res[0].fileUrl);
                            setProduct({ ...product, imageLink: res[0].fileUrl })
                            alert("Upload Completed");
                        }}
                        onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                    <img
                        src={product.imageLink}
                        alt='profile-image'
                    />


                    <input
                        value={product.imageLink}
                        onChange={(e) => setProduct({ ...product, imageLink: e.target.value })}
                        placeholder="Enter the Image link name here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
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

export default ProductForm;