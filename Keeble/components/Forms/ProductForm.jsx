import Link from "next/link";
import "@uploadthing/react/styles.css";
import { useState, useEffect } from "react";
import { UploadButton } from "/utils/uploadthing";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FilterBar = ({ categorySelected, handleSelection }) => {
    return (
        <Stack direction="row" useFlexGap flexWrap="wrap" alignItems="center" spacing="2" justifyContent='flex-start'> 
            <Chip
                label="Base"
                color={categorySelected.includes("Base") ? "primary" : "default"}
                onClick={() => handleSelection("Base")}
            />
            <Chip
                label="100%"
                color={categorySelected.includes("100%") ? "primary" : "default"}
                onClick={() => handleSelection("100%")}
            />
            <Chip
                label="TKL"
                color={categorySelected.includes("TKL") ? "primary" : "default"}
                onClick={() => handleSelection("TKL")}
            />
            <Chip
                label="75%"
                color={categorySelected.includes("75%") ? "primary" : "default"}
                onClick={() => handleSelection("75%")}
            />
            <Chip
                label="65%"
                color={categorySelected.includes("65%") ? "primary" : "default"}
                onClick={() => handleSelection("65%")}
            />
            <Chip
                label="60%"
                color={categorySelected.includes("60%") ? "primary" : "default"}
                onClick={() => handleSelection("60%")}
            />
            <Chip
                label="Switches"
                color={categorySelected.includes("Switches") ? "primary" : "default"}
                onClick={() => handleSelection("Switches")}
            />
            <Chip
                label="Tactile"
                color={categorySelected.includes("Tactile") ? "primary" : "default"}
                onClick={() => handleSelection("Tactile")}
            />
            <Chip
                label="Linear"
                color={categorySelected.includes("Linear") ? "primary" : "default"}
                onClick={() => handleSelection("Linear")}
            />
            <Chip
                label="Clicky"
                color={categorySelected.includes("Clicky") ? "primary" : "default"}
                onClick={() => handleSelection("Clicky")}
            />
            <Chip
                label="3-pins"
                color={categorySelected.includes("3-pins") ? "primary" : "default"}
                onClick={() => handleSelection("3-pins")}
            />
            <Chip
                label="5-pins"
                color={categorySelected.includes("5-pins") ? "primary" : "default"}
                onClick={() => handleSelection("5-pins")}
            />
            <Chip
                label="Keycaps"
                color={categorySelected.includes("Keycaps") ? "primary" : "default"}
                onClick={() => handleSelection("Keycaps")}
            />
            <Chip
                label="ABS"
                color={categorySelected.includes("ABS") ? "primary" : "default"}
                onClick={() => handleSelection("ABS")}
            />
            <Chip
                label="PBT"
                color={categorySelected.includes("PBT") ? "primary" : "default"}
                onClick={() => handleSelection("PBT")}
            />
            <Chip
                label="Doubleshot"
                color={categorySelected.includes("Doubleshot") ? "primary" : "default"}
                onClick={() => handleSelection("Doubleshot")}
            />
            <Chip
                label="Pudding"
                color={categorySelected.includes("Pudding") ? "primary" : "default"}
                onClick={() => handleSelection("Pudding")}
            />
            <Chip
                label="OEM"
                color={categorySelected.includes("OEM") ? "primary" : "default"}
                onClick={() => handleSelection("OEM")}
            />
            <Chip
                label="Cherry"
                color={categorySelected.includes("Cherry") ? "primary" : "default"}
                onClick={() => handleSelection("Cherry")}
            />
            <Chip
                label="DSA"
                color={categorySelected.includes("DSA") ? "primary" : "default"}
                onClick={() => handleSelection("DSA")}
            />
            <Chip
                label="Accessories"
                color={categorySelected.includes("accessories") ? "primary" : "default"}
                onClick={() => handleSelection("accessories")}
            />
            <Chip
                label="Cable"
                color={categorySelected.includes("Cable") ? "primary" : "default"}
                onClick={() => handleSelection("Cable")}
            />
            <Chip
                label="Foam"
                color={categorySelected.includes("Foam") ? "primary" : "default"}
                onClick={() => handleSelection("Foam")}
            />
            <Chip
                label="Lubricant"
                color={categorySelected.includes("Lubricant") ? "primary" : "default"}
                onClick={() => handleSelection("Lubricant")}
            />
            <Chip
                label="PCB"
                color={categorySelected.includes("PCB") ? "primary" : "default"}
                onClick={() => handleSelection("PCB")}
            />
            <Chip
                label="Carrying Case"
                color={categorySelected.includes("Carrying Case") ? "primary" : "default"}
                onClick={() => handleSelection("Carrying Case")}
            />
            <Chip
                label="Pullers"
                color={categorySelected.includes("Pullers") ? "primary" : "default"}
                onClick={() => handleSelection("Pullers")}
            />
            <Chip
                label="Others"
                color={categorySelected.includes("Others") ? "primary" : "default"}
                onClick={() => handleSelection("Others")}
            />
            <Chip
                label="$"
                color={categorySelected.includes("$") ? "primary" : "default"}
                onClick={() => handleSelection("$")}
            />
            <Chip
                label="$$"
                color={categorySelected.includes("$$") ? "primary" : "default"}
                onClick={() => handleSelection("$$")}
            />
            <Chip
                label="$$$"
                color={categorySelected.includes("$$$") ? "primary" : "default"}
                onClick={() => handleSelection("$$$")}
            />
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