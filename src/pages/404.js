import React,{useContext} from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "../style/404.css"
import { Link } from "gatsby";
import { LanguageContext } from '../context/LanguageContext';

const NotFoundPage = () => {
    const { locale } = useContext(LanguageContext);

  return (
   <Layout>
    <Seo />
        <section className='NotFoundPage-sec'>
            <div className='blurred-circle NotFoundPage-circle'></div>
            <div className='NotFoundPage-container'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, we couldn’t find the page you ‘re looking for </p>
                <Link to={`/${locale}/`} className='primary-cta no-underline inline-flex items-center justify-center text-base font-extrabold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10'>Back to Home Page</Link>
            </div>
        </section>
   </Layout>
  )
}

export default NotFoundPage
