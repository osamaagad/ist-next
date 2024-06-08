import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="Epson CO-W01"
    images={[
      '/education-product/projectors/epson/epson1.jpeg',
      '/education-product/projectors/epson/epson.jpg',
      '/education-product/projectors/epson/epson2.png',
      '/education-product/projectors/epson/epson3.jpg'
    ]}
    details={[
      ['Availability', 'Available'],
      ['Light Output', '3000 Lumen'],
      ['Category', 'Projectors']
    ]}
  >
    <a href="https://drive.google.com/file/d/1-grnIG54p7NHK2lOOlBBqCHoU8-thAVt/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}