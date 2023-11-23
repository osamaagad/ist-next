import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Water Treatment</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="Sewage Water Treatment "
          href="/blog/Water-treatment/Sewage-water"
          text="We design and supervise the implementation of sewage treatment plants for various production capacities, and we can provide solutions and studies for sewage treatment plants for small and large residential complexes"
          src="/Sewage-Water-Treatment.jpg"
        />

        <BlogItem
          title="Industrial waste treatment plants"
          href="/blog/Water-treatment/Industrial-waste"
          text="We design, construct, operate and maintain industrial waste water treatment plants resulting from different factories and for different production capacities and different pollutants (Industries A - B - C)."
          src="/ndustrial-waste-treatment-plants.jpg"
        />

        <BlogItem
          title="Water treatment plants (wells - groundwater - seawater)"
          href="/blog/Water-treatment/Water-treatment-plants"
          text="ECORD Consulting Company designs and supervises the implementation of water treatment plants (wells - groundwater - seawater) with various production capacities. All accessories for the water treatment units are equipped with water networks (drainage and drinking)."
          src="/Water-treatment.webp"
        />

        
     </div>
  </div>
}