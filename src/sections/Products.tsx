import {type NextPage} from "next";
import {Chips, ProductCard} from "@/components";
import {data, products} from "@/data/data";
import ShadowButton from "@/components/ShadowButton";

const Products: NextPage = () => {
    return (
        <section className="px-5 lg:px-16 py-[5.5rem] relative items-center text-center">
            <h1 className="text-[2.125rem] tracking-tight leading-10 font-black">
                SOPASTORE makes clothes to elevate everyday life through lighthearted
                escapism. While styles vary by season,<span
                className={"hover:bg-pink border-2 border-primary rounded-full px-5 text-center hover:shadow-[0.25rem_0.25rem_0_0_#000]"}>all collections</span> are
                guided by the ineffable sense of freedom that comes with travel.
            </h1>
            <Chips data={data}/>
            <div className={"grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 py-4"}>
                {products.map((item, index) => {
                        return <ProductCard key={index} productData={item}/>
                    }
                )}
            </div>
            <ShadowButton title={"View All"}/>
        </section>
    );
};

export default Products;
