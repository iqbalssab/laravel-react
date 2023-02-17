import React, { useEffect, useState } from "react";

const isPosts = (posts) => {
    return posts.map((post, index) => {
        return (
            <div key={index} className="card md:w-96 w-full my-5 mx-5 bg-neutral text-white shadow-xl">
                <figure>
                    <img
                        src="https://source.unsplash.com/380x230"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {post.title}
                        <div className="badge badge-secondary badge-lg"> NEW! </div>
                    </h2>
                    <p> {post.body} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        );
    });
}


const Card = ({ posts }) => {
    // kalo ga ada isi posts nya
    return !posts ? (
        <div className="text-2xl font-bold text-black bg-primary">
            Tidak ada Data Tersedia!
        </div>
    ) : isPosts(posts)
}

export default Card;
