import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="View Sonic PA700X , PA700S , PA503W"
    images={[
      '/education-product/projectors/view-sonic/view-sonic.png',
      '/education-product/projectors/view-sonic/view-sonic1.png',
      '/education-product/projectors/view-sonic/view-sonic2.jpg',
      
    ]}
    details={[
      ['Availability', 'Available'],
      ['Light Output', '3500 , 4500 Lumen'],
      ['Category', 'Projectors']
    ]}
  >
    <a href="https://drive.google.com/file/d/1tkFKiEbqSTm0kGdtWK9B-XkPLPcYgI9W/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>PA700S</a><br/>
    <a href="https://drive.google.com/file/d/1JcV88e4WEH3TzocYY7I88y61KtiowQoT/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>PA700X</a><br/>
    <a href="https://drive.google.com/file/d/1eWtkswute3R2VK7XVLQexCNCmGNlfFMG/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>PA503W</a>


    <hr/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
  </Product>
}