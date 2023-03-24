import {type NextPage} from "next";
import {useState} from "react";

const Chips: NextPage<{ data: CategoryProps[] }> = (data) => {
    const [selectedCat, setSelectedCat] = useState(0);
    return (
        <div className={"grid grid-flow-col p-5 gap-4 z-2"}>
            {data.data.map((item, index) => {
                return (
                    <button key={index}
                            onClick={() => setSelectedCat(index)}
                            className={`${index === selectedCat ? 'translate-y-[-0.25rem] translate-x-[-0.25rem] shadow-[0.25rem_0.25rem_0_0_#000]' : ''} inline-block align-middle p-2 bg-white text-black border-2 border-black rounded-full tracking-wide overflow-hidden whitespace-nowrap text-ellipsis hover:translate-y-[-0.25rem] hover:translate-x-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_#000]`}>
                        {item.text}
                    </button>
                )
            })}
        </div>
    );
};

export default Chips;
