"use client";

import { useRouter } from "next/navigation";

function ProductCard({ title, desc, img_url, price, id }) {
    const router = useRouter();
    return (
        <div className="w-[calc(50%-12px)] md:w-[calc((100%-48px)/4)] border border-1 border-slate-400 flex flex-col p-3 rounded-lg shadow-xl mt-6">
            <img
                className="h-[100px] md:h-[200px] self-center"
                src={img_url}
                alt="product"
            />
            <h1
                className="font-semibold truncate hover:text-themePrimary cursor-pointer"
                title={title}
                onClick={() => router.push(`/products/${id}`)}
            >
                {title}
            </h1>
            <p className="text-xs text-gray-500 mt-2 truncate text-ellipsis mb-4">
                {desc}
            </p>
            <div className="flex items-center justify-between mt-auto">
                <p className="text-sm">${price}</p>
                <button
                    className="bg-slate-700 p-1 px-4 rounded-sm text-white text-sm"
                    onClick={() => router.push(`/products/${id}`)}
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
