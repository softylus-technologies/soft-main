import React from 'react'
import { Link } from "gatsby";
import "./style/new-header.css"
const newheader = ({title,subtitle,tag,button}) => {
  return (
    <section className='newheader-sec'>
        <div className='blurred-circle'></div>
        <div className='newheader-container'>
            <h1>{title}</h1>
            <h6><img src='/medal-star.png'/>{tag}</h6>
            <p>{subtitle}</p>
            <Link rel="canonical"  to="" className="primary-cta no-underline inline-flex items-center justify-center text-base font-extrabold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10">{button}</Link>
        </div>
    </section>
  )
}

export default newheader
