import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="Bromo Carbon"
    images={[
      '/water-product/media/TDS-830-coal/TDS.png',
      '/water-product/media/TDS-830-coal/TDS1.jpg',
      '/water-product/media/TDS-830-coal/TDS2.jpg',
      '/water-product/media/TDS-830-coal/TDS3.webp',

    ]}
    details={[
      ['Availability', 'Available'],
      ['Model', 'Brgac-B30'],
      ['Category', 'Media']
    ]}
  >
    <a href="https://drive.google.com/file/d/1sYqCY2xfV8yIviVtF6VEwbbEcfiN4Oig/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}