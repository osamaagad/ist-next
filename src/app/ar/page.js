import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PartnersSection from "@/components/PartnersSection";
import SlideSection from "@/components/SlideSection";

export default function () {
  return (
    <>
      <div id="top_section" className=" banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            آي إس تي<br />
                            للحلول الهندسيه <br />
                            والطاقه المتجدده
                          </h1>
                          <p>
                            خدمات الطاقه المتجدده <br />
                            الطاقه الشمسيه وتطبيقاتيها وطاقه الرياح
                          </p>
                          <a className="read_more" href="about.html">
                            عن الشـــــركه{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            أتصل بــــنا{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            آي إس تي<br />
                            للحلول الهندسيه <br />
                            والطاقه المتجدده
                          </h1>
                          <p>
                            {" "}
                            خدمات معالجه المياه
                            <br />
                            معالجه الصرف الصحي والصرف الصناعي وتحليه وتنقيه المياه
                          </p>
                          <a className="read_more" href="about.html">
                            عن الشـــــركه{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            أتصل بــــنا{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            آي إس تي<br />
                            للحلول الهندسيه <br />
                            والطاقه المتجدده
                          </h1>
                          <p>
                            خدمات تكنولوجيا التعليم
                            <br />
                            شاشات تعليميه تفاعليه والبروجيكتور وقسم الصيانه
                          </p>
                          <a className="read_more" href="about.html">
                            عن الشـــــركه{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            أتصل بــــنا{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            آي إس تي<br />
                            للحلول الهندسيه <br />
                            والطاقه المتجدده
                          </h1>
                          <p>
                            أنظمه مكافحه وإنذار الحريق
                            <br />
                            تصميم وتركيب وتشغيل
                          </p>
                          <a className="read_more" href="about.html">
                            عن الشـــــركه{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            أتصل بــــنا{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end slider section --> */}
      <SlideSection title="المدونة" isArabic>
        <>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                النظام المتصل بالشبكه
              </h3>
              <p>
              أنظمة On-Grid   هي أنظمة شمسية تعمل على توليد الطاقة فقط عندما تكون مربوطة على شبكة الطاقة الكهربائية   العامة و هي محطات يمكن تركيبها  لجميع المنشأت , منازل , مدارس , مصانع , مستشفيات .. و غيرها 
              </p>
              <a className="read_more" href="./blog/index.html">
                اقرأ المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                النظام غير المتصل بالشبكه
              </h3>
              <p>
              تصمم تلك الأنظمة للحالات الغير متصلة بشبكة الكهرباء و هي تزودك بالطاقة عن طريق تحويل الطاقة  المولدة من ألواح الطاقة الشمسية و التي يتم تحويلها الي  كهرباء  و يتم تخزينها  في بطاريات عبر محول كهربائي 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                أنظمه الري
              </h3>
              <p>
               مما لا شك فيه فإن حلول شركة آي إس تي  لتشغيل آبار المياه بالطاقة الشمسية  بديلا عن الديزل أو الكهرباء الحكومية  هي الطريقة المثلى للاستثمار السليم لرأس المال حيث يتم استرداده  في مدة  لا تتخطى عامين
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                السخانات الشمسيه
              </h3>
              <p>
              تعتبر السخانات الشمسية وسيلة غير مكلفة لاستغلال الحرارة الناتجة من أشعة الشمس وتحويلها للاستفادة منها من خلال تسخين الماء الموجود بداخل السخان الشمسي
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                أنظمه الأضاءه 
              </h3>
              <p>
              تقدم شركة آي إس تي انظمة اضاءة تعمل بشكل تلقائي مع غروب الشمس  و هي أنظمة مستقلة عن الشبكة و لا تحتاج تكاليف اضافيه و تتضمن كشافات ليد مختلفة القدرة و شدة الاضاءة حسب حاجة العميل و مكان التركيب   متصل ببطاريات مدمجة أو منفصلة  حسب نوع التطبيق 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                بنوك الطاقه 
              </h3>
              <p>
              تعد أنظمة تخزين الطاقة  أحد المكونات الأكثر تعقيدًا وتكلفة لأي نظام طاقة خارج الشبكة. يجب أن تكون سعة تخزين البطارية كبيرة بما يكفي لتوفير الطاقة طوال العام
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                أنظمه المتابعه الشمسيه
              </h3>
              <p>
                he purpose of the fire-fighting check is to
                protect lives and property. The state forces the
                owner of establishments, companies and factories
                to implement a f
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/solar-panel-icon.png"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه الطاقه الشمسيه
                <br />
                لوحات الأنفرتر
              </h3>
              <p>
                The purpose of the fire-fighting check is to
                protect lives and property. The state forces the
                owner of establishments, companies and factories
                to implement a fire-fighting system in the
                building
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/wind energy.jpg"
                  alt="#"
                />
              </i>
              <h3>
                طاقه الرياح 
                <br />الطوربينات الهوائيه{" "}
              </h3>
              <p>
              طاقة الرياح هي توظيف جريان الهواء من خلال توربينات الرياح لتشغيل المولدات ميكانيكياً كي تولد الكهرباء. وكحقول الطاقة الشمسية، تربط حقول طاقة الرياح عدة توربينات بشبكة الكهرباء بشكل مباشر لتحل محلّ محطات توليد الطاقة التقليدية
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/water-treatment.png"
                  alt="#"
                />
              </i>
              <h3>
                معالجه المياه
                <br />
                 معالجه الصرف الصحي {" "}
              </h3>
              <p>
              نقوم بتصميم و اشراف علي تنفيذ محطات معالجة مياه الصرف الصحى لمختلف الطاقات الانتاجية ويمكننا تقديم الحلول والدراسات لمحطات معالجة الصرف الصحي للتجمعات السكنية الصغيرة والكبيرة 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/water-treatment.png"
                  alt="#"
                />
              </i>
              <h3>
                معالجه المياه
                <br />
                معالجه الصرف الصناعي 
              </h3>
              <p>
                 بتصميم و إنشاء و تشغيل و صيانة محطات معالجة مياه النفايات الصناعية الناتجة من المصانع المختلفة و لمختلف الطاقات الانتاجية ومختلف الملوثات 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/water-treatment.png"
                  alt="#"
                />
              </i>
              <h3>
                معالجه المياه
                <br />
                أنظمه نتقيه وتحليه و معالجه المياه {" "}
              </h3>
              <p>
              نقوم بتصميم و اشراف علي تنفيذ محطات مياه الشرب لمختلف الطاقات النتاجية حيث يتم فلترة و تعقيم المياه الخام باحدث الطرق الحديثة وتشمل وحدة الترسيب و التجميع و وحدة الترشيح و وحدة التعقيم و كذلك أعادة التدوير ضمن المنظومة 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/water-treatment.png"
                  alt="#"
                />
              </i>
              <h3>
                معالجه المياه
                <br />
                روافع المياه{" "}
              </h3>
              <p>
              تصميم و اشراف علي التنفيذ لكافة الروافع  صحي و صناعي و شرب 
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/education-technology.jpg"
                  alt="#"
                />
              </i>
              <h3>
                تكنولوجيا التعليم
                <br />
                شاشات تعليمية تفاعلية{" "}
              </h3>
              <p>
              وهي أحدث التقنيات في مجال التعليم الذكي. إنها شاشة تعمل باللمس ونظام التشغيل هو اندريود يمكن تشغيله على نظام التشغيل ويندوز ، كما أنها مزودة بنظام تعليمي متكامل لمساعدة المعلم على الارتقاء بمستوى العملية التعليمية إلى مستوى آخر
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/education-technology.jpg"
                  alt="#"
                />
              </i>
              <h3>
                تكنولوجيا التعليم
                <br />
                البروجيكتور 
              </h3>
              <p>
              وهي الأجهزة التي تعرض الصور بمساحات كبيرة ويمكن إضافة السبورة الذكية والكمبيوتر لتحويل النظام إلى نظام تفاعلي بالكامل
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/education-technology.jpg"
                  alt="#"
                />
              </i>
              <h3>
                تكنولوجيا التعليم
                <br />
                السبورات الذكية
              </h3>
              <p>
              وهي عبارة عن لوحة ذكية يتم توصيلها بالكمبيوتر وتعرض صورة جهاز العرض عليها، ويمكنك التفاعل مع المحتوى المعروض من خلال اللمس
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/education-technology.jpg"
                  alt="#"
                />
              </i>
              <h3>
                تكنولوجيا التعليم
                <br />
                الصيانه
              </h3>
              <p>
              كل هذه الحلول الذكية متوفرة، كما يتوفر مركز صيانة معتمد لصيانة كافة الأجهزة وتوفير كافة قطع الغيار
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/Fire fighting.jpg"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه مكافحه الحريق
                <br />تصميم وتركيب وتشغيل وصيانه
              </h3>
              <p>
              ان الغرض من شبكه مكافحه الحريق هوه حمايه الارواح والممتلكات وتجبر الدوله ماللك المنشأت والشركات والمصانع بالقيان بعمل نظام مكافحه حريق بالمبني وذلك للحصول علي ترخيص لاقامه المبني
              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div id="bo_ho" className="we_box text_align_right">
              <i>
                <img
                  className="tem"
                  src="/fire alarm.jpg"
                  alt="#"
                />
              </i>
              <h3>
                أنظمه إنذار الحريق
                <br />
                تصميم وتركيب وتشغيل وصيانه
              </h3>
              <p>
              ان الغرض من نظام انذار الحريق هوه التنبيه بوجود حريق فى بداياته قبل ان ينتشر ليسهل التعامل معه لذلك فهوه موجه اغلب الوقت للبشر العاملين بالموقع وايضا لتبليغ اقرب مكان للحمايه المدنيه(المطافي) بطريقه اوتوماتيكيه 
وايضا يستفاد من انظام انذار الحريق فى ايقاف وتشغيل بعد المعدات لحرمان الحريق من الاكسجين بقدر الامكان

              </p>
              <a className="read_more" href="we_do">
                إقــــرأ  المزيد
              </a>
            </div>
          </div>
        </>
      </SlideSection>

      
      {/* LOGOS SECTION */}

      <div className="partner-section">
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <h2>Our-Partners</h2>
              </div>
            </div>
          </div>
          </div>
      <PartnersSection
        isArabic
        logos={[
          {
            src: '/ist-logo.webp',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/we1.png',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/we2.png',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/we3.png',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/wind3.jpg',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/wind1.png',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/wind2.png',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
          {
            src: '/wind-energy.jpg',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have There are many variations of passages of Lorem Ipsum available, but the majority have'
          },
        ]}
      />
      </div>
      {/* <!-- about --> */}
      <div className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>عن الطاقة الشمسية</h2>
                  </div>

                  <iframe className="video_section" width="1120" height="630" src="https://www.youtube.com/embed/K939fmB5jy8?si=7H_A4ty5wjiF_QUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
        <hr />
      </div>
      {/* <!-- end about --> */}
      {/* <!-- portfolio --> */}
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_right">
                <h2>We Have Done Portfolio </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_right">
                <figure>
                  <img
                    className="prot-img"
                    src="/solar-system-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>أنظمه الطاقه الشمسيه</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_right">
                <figure>
                  <img
                    className="prot-img"
                    src="/Water-Treatment-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>معالجه المياه</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_right">
                <figure>
                  <img
                    className="prot-img"
                    src="/education-technology-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>تكنولوجيا التعليم</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_right">
                <figure>
                  <img
                    className="prot-img"
                    src="/fire-fighting-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>FIRE FIGHTING</h3>
                    <p>
                      Pump Room including: two main pumps electrical and
                      diesel,Main Pumps (Electrical , Diesel): 750 gpm @ 8 bar,
                      3000 rpm. Each And Jockey Pump: 125 gpm @9 bar, 2900 rpm
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-12">
              <a className="read_more" href="portfolio.html">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end portfolio --> */}
      {/* <!-- chose --> */}
      <div className="chose">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-12">
              <div className="titlepage text_align_right">
                <h2>Why Chose us</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose1.png" alt="#" />
                </i>
                <h3>Project Done </h3>
                <strong>1000+</strong>
                <a className="read_more" href="#">
                  إقــــرأ  المزيد
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose2.png" alt="#" />
                </i>
                <h3>Happy Clients </h3>
                <strong>900+</strong>
                <a className="read_more" href="#">
                  إقــــرأ  المزيد
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose3.png" alt="#" />
                </i>
                <h3>Awards</h3>
                <strong>100+</strong>
                <a className="read_more" href="#">
                  إقــــرأ  المزيد
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end chose --> */}
      {/* <!-- contact --> */}
      <div className="contact">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="titlepage text_align_right">
                <h2>Get In Touch</h2>
              </div>
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="type"
                      name=" Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-md-6">
                  <div className="titlepage text_align_right">
                     <h2>What Says Clients</h2>
                  </div>
                  <div id="clientsl" className="carousel slide our_clientsl" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#clientsl" data-slide-to="0" className="active"></li>
                        <li data-target="#clientsl" data-slide-to="1"></li>
                        <li data-target="#clientsl" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#clientsl" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#clientsl" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
