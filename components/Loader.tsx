"use client";

import { BeatLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px] w-full bg-[#111112]">
            <BeatLoader color="#fff" size={15} />
        </div>
    );
};

export default Loader;

