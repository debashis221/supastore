import React from 'react';
import {type NextPage} from "next";
import Image from "next/image";

const ProductCard: NextPage<{ productData: ProductProps }> = (productData) => {
    return (
        <article
            className={"relative grid text-black border-2 border-primary rounded-[0.25rem] bg-secondary text-start hover:shadow-[0.25rem_0.25rem_0_0_#000]"}>

            <div className={"border-b-2 border-primary pb-[100%] relative"}>
                <Image
                    src={productData.productData.image} alt={productData.productData.name} width={400} height={400}
                    className={"absolute top-0 left-0 w-full h-full object-cover"}
                />
            </div>
            <header className={"p-4 grid gap-2 border-b-2 border-primary"}>
                <h2 className={"text-[1.125rem] font-bold"}>{productData.productData.name}</h2>
                <p className={"text-[0.875rem]"}>{productData.productData.description.slice(0, 100)}</p>
            </header>
            <footer className={"flex"}>
                <div
                    className={"flex-grow text-start p-5 border-r-2 border-primary grid grid-flow-col auto-cols-max items-center flex-shrink-0 gap-[0.25rem] "}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 1.143l2.857 5.514h6.13l-4.571 3.486L13.428 16l-4.571-3.486L4.286 16l1.143-6.343L0 6.657h6.13z"/>
                    </svg>

                    <span className={""}>{productData.productData.rating}</span>
                    <span>({productData.productData.rating})</span>
                </div>
                <div className={"p-5"}>
                    <div
                        className={"price"}>${productData.productData.price}</div>
                </div>

            </footer>


        </article>

    );
};

export default ProductCard;
