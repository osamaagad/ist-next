import BlogItemArabic from "@/components/BlogItemArabic"

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Blog</h2>
              </div>
           </div>
        </div>

        <BlogItemArabic
          title="أنظمه الطاقه الشمسيه"
          href="/blog/solar-systems"
          text="الطاقة الشمسية هي الضوء المنبعث والحرارة المنبعثة من الشمس والتي يتم تسخيرها باستخدام مجموعة من التقنيات مثل الطاقة الشمسية لتوليد الكهرباء، والطاقة الحرارية الشمسية (بما في ذلك تسخين المياه بالطاقة الشمسية)، والهندسة المعمارية الشمسية.."
          src="/blog-solar.jpg"
        />

        <BlogItemArabic
          title="معالجة المياه"
          href="/blog/Water-treatment"
          text="معالجة المياه هي أي عملية تعمل على تحسين جودة المياه لجعلها مناسبة لاستخدام نهائي محدد. قد يكون الاستخدام النهائي هو الشرب أو إمدادات المياه الصناعية أو الري أو صيانة تدفق النهر أو الترفيه عن المياه أو العديد من الاستخدامات الأخرى، بما في ذلك إعادتها بأمان إلى البيئة.."
          src="/blod-water.webp"
        />

        <BlogItemArabic
          title="تكنولوجيا التعليم"
          href="/blog/Educational-technology"
          text="تكنولوجيا التعليم (التي يتم اختصارها عادةً باسم edutech أو edtech) هي الاستخدام المشترك لأجهزة الكمبيوتر والبرمجيات والنظرية والممارسة التعليمية لتسهيل التعلم. عندما يشار إليها بالاختصار EdTech، فإنها غالبًا ما تشير إلى صناعة الشركات التي تنشئ تكنولوجيا التعليم."
          src="/blog-Education.jpg"
        />

        <BlogItemArabic
          title="أنظمه مكافحه وانذار الحريق"
          href="/blog/Fire-fighting-&-alarm"
          text="مكافحة الحرائق هي مهنة تهدف إلى السيطرة على الحرائق وإطفائها. يُعرف الشخص الذي يشارك في مكافحة الحرائق باسم رجل الإطفاء أو رجل الإطفاء. نظام إنذار الحريق هو نظام بناء مصمم لكشف وتنبيه الشاغلين وقوات الطوارئ عن وجود دخان أو حريق أو أول أكسيد الكربون أو حالات الطوارئ الأخرى المرتبطة بالحريق.."
          src="/blog-fire-fighting.jpg"
        />
     </div>
  </div>
}