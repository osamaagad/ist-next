import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="BC-1000"
    images={[
      '/water-product/media/ACTIVE-CARBON/ACT-CARBON.jpeg',
      '/water-product/media/ACTIVE-CARBON/ACT-CARBON1.png',
      '/water-product/media/ACTIVE-CARBON/ACT-CARBON2.webp',
      '/water-product/media/ACTIVE-CARBON/ACT-CARBON3.jpg',

    ]}
    details={[
      ['Availability', 'Available'],
      ['ACTIVE CARBON'],
      ['Category', 'Media']
    ]}
  >
    <a href="https://drive.google.com/file/d/1gBZA8GD6PI1CjC4rB4pGiFXtN1XnzC9C/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>click here to download PDF</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}