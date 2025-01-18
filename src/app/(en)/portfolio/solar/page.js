import { Project } from "@/components/Project";

export default function PortfolioPage() {
   return (
      <div className="portfolio">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_left">
                     <h2>We Have Done Portfolio  </h2>
                  </div>
               </div>
            </div>
            <Project
               title="Dr Ahmed Al-Maysari"
               photos={[
                  // '/dr-ahmed-elmesery/a.jpg',
                  '/dr-ahmed-elmesery/ab.jpg',
                  '/dr-ahmed-elmesery/3.jpg',
                  '/dr-ahmed-elmesery/4.jpg',
                  '/dr-ahmed-elmesery/5.jpg',
                  '/dr-ahmed-elmesery/6.jpg',
               ]}
            >
               <p>Uninterruptible power supply with 4800 watts of storage capacity and 2 hours of operation at a rate of 1200 watts per hour. Installed in a doctor's clinic for ultrasound devices.</p>
            </Project>

            <Project
               title="Test project"
               photos={[
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/education-technology-proj.jpg'
               ]}
            >
               <p>project details here</p>
            </Project>

            <Project
               title="Test project"
               photos={[
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/education-technology-proj.jpg'
               ]}
            >
               <p>project details here</p>
            </Project>

            <Project
               title="Test project"
               photos={[
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/education-technology-proj.jpg'
               ]}
            >
               <p>project details here</p>
            </Project>
         </div>
      </div>
   );
}
