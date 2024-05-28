import React from 'react'
import "../style/projects.css";
import { Link } from "gatsby";

const projectDiscussion = () => {
  return (
    <section className='projectDiscussion-sec md:px-[70px] mx-auto'>
        <div className='projectDiscussion-container'>
            <div className='projectDiscussion-content'>
                <img src='/Mask group.png'/>
                <h1>Let's talk about your website project!</h1>
                <p>Unlocking the Power of Communication: Strategizing for Successful Software Development</p>
                <Link
                to="/contact-us"
                className="no-underline mb-4 inline-flex items-center justify-center px-4 py-[12px] text-base font-semibold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                >
                Book Zoom Call<img src="/Arrow 1 (1).svg" class="mx-2"></img>
                </Link>
                <div className='projectDiscussion-span'>
                    <span><img src='/Vector (3).png'/>No pressure</span>
                    <span><img src='/Vector (3).png'/>Get pricing quote</span>
                    <span><img src='/Vector (3).png'/>See more site examples</span>
                </div>
            </div>
            <div className='projectDiscussion-img'>
                <img src='/Group 427318923.png'/>
            </div>
        </div>
    </section>
  )
}

export default projectDiscussion