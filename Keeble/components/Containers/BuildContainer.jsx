'use client';

import ProductContainer from "./ProductContainer";

const BuildContainer = ({build}) => {

    const handleDelete = async () => {
        const hasConfirmed = confirm('Are you sure you want to delete this build');
        if(hasConfirmed) {
            try {
                await fetch(`/api/builds/${build._id}`,{
                    method: 'DELETE'
                });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    }   

    return (
        <div className="w-[90%] h-full bg-box-gray border-2 border-black rounded-lg px-5 py-5 
                    flex flex-col shadow-lg hover:shadow:2xl">
            <div className="heading_black">
                {build.name} :
            </div>
            <div className="flex py-5 gap-5">
                {build.parts.map((product) => {
                    return(
                        <ProductContainer product={product} />
                    )
                })}
            </div>
            <div className="flex justify-end">
                <button className="delete_button" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BuildContainer;