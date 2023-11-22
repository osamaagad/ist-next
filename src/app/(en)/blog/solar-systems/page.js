import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Solar Systems</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="On Grid System"
          href="/blog/solar-system/on-grid-system"
          text="On-Grid systems are solar systems that generate energy only when they are connected to the public electrical power network. They are stations that can be installed in all facilities, homes, schools, factories, hospitals...etc. The station is connected to the electricity network, the energy produced is used, and the surplus is sold."
          src="/prot1.jpg"
        />

        <BlogItem
          title="Off Grid System"
          href="/blog/solar-system/off-grid-system"
          text="Solar energy system that is not connected to the electricity grid.
          These systems are designed for situations that are not connected to the electricity grid, and they provide you with energy by converting the energy generated from solar panels"
          src="/prot1.jpg"
        />

        <BlogItem
          title="Solar Pump System"
          href="/blog/solar-system/Solar-Pump-System"
          text="    There is no doubt that IST’s solutions for operating water wells with solar energy instead of diesel or government electricity are the ideal way to properly invest capital, as it is recovered in a period not exceeding two years with the best materials and equipment used"
          src="/prot1.jpg"
        />

        <BlogItem
          title="Solar Heat System"
          href="/blog/solar-system/Solar-Heat-system"
          text="Solar heaters are considered an inexpensive way to exploit the heat resulting from sunlight and convert it to benefit by heating the water inside the solar heater. By shedding the sun’s heat on solar heaters, it can heat water with ease. "
          src="/prot1.jpg"
        />
        <BlogItem
          title="Solar Light System"
          href="/blog/solar-system/Solar-Light-System"
          text="    IST offers lighting systems that operate automatically with sunset. They are independent from the network and do not require additional costs. They include LED lights of different power and lighting intensity according to the customer’s need, and the installation location is connected to built-in or separate batteries depending on the type of application"
          src="/prot1.jpg"
        />
        <BlogItem
          title="Energy Saving Systems "
          href="/blog/solar-system/Battery-bank"
          text="Your battery storage needs to be large enough to supply power year-round. Nothing is more frustrating than suffering a power outage because your battery bank doesn’t store enough charge"
          src="/prot1.jpg"
        />
        <BlogItem
          title="Tracking System"
          href="/blog/solar-system/Tracking-system"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/prot1.jpg"
        />
        <BlogItem
          title="Inverter Cabinet"
          href="/blog/solar-system/inverter-cabinet"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/prot1.jpg"
        />
        <BlogItem
          title="Wind Energy"
          href="/blog/solar-system/Wind-Energy"
          text="Wind power is the use of air flow through wind turbines to mechanically power generators for electricity. Like our solar farms, wind farms connect multiple turbines directly to the power grid, replacing conventional power stations. Wind power varies significantly over the year and is often complemented with other sources of electricity to ensure consistent power generation."
          src="/prot1.jpg"
        />
     </div>
  </div>
}