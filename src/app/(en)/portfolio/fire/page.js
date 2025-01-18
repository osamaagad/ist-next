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
               title="Test project"
            />
            <Project
               title="Test project"
            >sadfasdfasd</Project>

            <Project
               title="Test project"
               photos={[
                  '/solar-system-proj.jpg',
                  '/Water-Treatment-proj.jpg',
                  '/education-technology-proj.jpg'
               ]}
            >
               <p>lorefdsSdfsdfsdfsdfsdf</p>
               <iframe className="projectyoutube" width="560" height="315" src="https://www.youtube.com/embed/L190UWL934c?si=PzBQ4vmC0-qBV10o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Project>

            <Project
               title="Test project"
               photos={[
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
