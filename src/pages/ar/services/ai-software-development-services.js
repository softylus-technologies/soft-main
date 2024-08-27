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
import Seo from "../../../components/seo"
import { Helmet } from "react-helmet"; // Import Helmet

const ai = () => {
  return (
    <Layout>
      <Seo
        title="حلول الذكاء الاصطناعي لنمو الأعمال | أكثر من 5 سنوات من الخبرة | Softylus"
        description="توفر Softylus حلول ذكاء اصطناعي مخصصة تمكن الشركات من الأتمتة، والتحسين، والتنبؤ لتحقيق أقصى قدر من الكفاءة.  أكثر من 5 سنوات من الخبرة في التعلم الآلي، والبيانات الضخمة، والمزيد."
      />
       <Helmet>
        <meta name="keywords" content="تطوير برمجيات الذكاء الاصطناعي، تطوير الذكاء الاصطناعي المخصص، دمج الذكاء الاصطناعي، GPT، Claude، Gemini، Phi-2، Llama، ضبط LLMs، التعلم الآلي، التعلم العميق، معالجة اللغات الطبيعية، رؤية الكمبيوتر، التعرف على الأحرف الضوئية" />
       </Helmet>
        <Newheader
          title="حلول الذكاء الاصطناعي لنمو الأعمال"
          subtitle="مع أكثر من 5 سنوات من الخبرة، نقوم بإنشاء ذكاء اصطناعي يُمكن الشركات من أتمتة العمليات، وتحسين سير العمل، وتوقع المخاطر، وتحقيق أقصى قدر من الكفاءة في التكلفة.  يفخر فريقنا الخبير بتخصصه في التعلم الآلي، والبيانات الضخمة، ومعالجة اللغات الطبيعية، ونماذج الذكاء الاصطناعي المتقدمة لتقديم حلول شاملة تلبي احتياجاتك الفريدة."
          button="حجز مكالمة استكشافية مجانية"
          tag="أكثر من 5 سنوات من الخبرة"
        />
          <Label
            service={[
              "حلول الذكاء الاصطناعي المخصصة",
              "نماذج المشاركة المرنة",
              "فريق تطوير متخصص",
              "الدعم الشامل",
              "نتائج مثبتة"
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
