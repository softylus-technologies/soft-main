import React from 'react'
import Layout from '../../../components/layout'
import Newheader from '../../../components/new-header'
import Label from '../../../components/label'
import AISoftware from '../../../components/AI-Software'
import BlogSection from '../../../components/blog-section/BlogSection'
import WhyDevelopai from '../../../components/Why-Develop-ai'
import IndustriesWeServe from '../../../components/Industries-We-Serve'
import AIExpertise from '../../../components/AI-Expertise'
import SoftylusAILaunchpad from '../../../components/Softylus-AI-Launchpad'
import AIDevProcess from '../../../components/AIDevProcess'
import Seo from '../../../components/seo'
import { Helmet } from "react-helmet"; // Import Helmet

const ai = () => {
  return (
    <Layout>
      <Seo
      title="AI Solutions for Business Growth | 5+ Years Experience | Softylus"
      description="Softylus delivers custom AI solutions that empower businesses to automate, optimize, and predict for maximum efficiency. 5+ years of experience in machine learning, big data, and more."/>
        <Newheader
            title="AI Solutions for Business Growth"
            subtitle="With over 5 years of experience, we create AI that empowers businesses to automate processes, optimize workflows, predict risks, and achieve maximum cost efficiency.  Our expert team specializes in  machine learning, big data, NLP, and advanced AI models to deliver 360-degree solutions for your unique needs."
            button="Book a Free Discovery Call"
            tag="5+ Years of Experience" />
             <Helmet>
        
             <meta name="keywords" content="AI software development, custom AI development, AI integration, GPT, Claude, Gemini, Phi-2, Llama, LLM fine-tuning, machine learning, deep learning, NLP, computer vision, OCR" />
             </Helmet>
           <Label
                service={[
                    "Custom AI Solutions",
                    "Flexible Engagement Models",
                    "Expert Development Team",
                    "End-to-End Support",
                    "Proven Results"
                ]}
            />
            <AISoftware/>
            <WhyDevelopai/>
            <IndustriesWeServe/>
            <AIExpertise/>
            <SoftylusAILaunchpad/>
            <AIDevProcess/>
            <BlogSection />
    </Layout>
  )
}

export default ai
