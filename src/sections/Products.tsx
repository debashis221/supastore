import {type NextPage} from "next";
import {Chips, ProductCard} from "@/components";
import {data, products} from "@/data/data";

const Products: NextPage = () => {
    return (
        <div className="px-5 lg:px-16 py-[5.5rem] relative border-b-2 border-black items-center text-center">
            <h1 className="text-[2.125rem] tracking-tight leading-9">
                SOPASTORE makes clothes to elevate everyday life through lighthearted
                escapism. While styles vary by season <span>all collections</span> are
                guided by the ineffable sense of freedom that comes with travel.
            </h1>
            <Chips data={data}/>
            <div className={"grid grid-cols-2 gap-5 lg:grid-cols-3"}>
                {products.map((item, index) => {
                        return <ProductCard key={index} productData={item}/>
                    }
                )}
            </div>
        </div>
    );
};

export default Products;
