import React from 'react';
import bannerImage from '../../assets/pngwing_1-removebg-preview.png'

const Banner = () => {
    return (

        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />
your bookshelf</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi. 
                    </p> */}
                    <button className="btn bg-[#23be0a] mt-4">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;