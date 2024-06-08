import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="Purolite MB400"
    images={[
      '/water-product/media/Purolite-MB400/Purolite.jpg',
      '/water-product/media/Purolite-MB400/Purolite1.jpg',
      '/water-product/media/Purolite-MB400/Purolite2.jpg',
    ]}
    details={[
      ['Availability', 'Available'],
      ['Category', 'Sensor']
    ]}
  >
    <a href="https://drive.google.com/file/d/1KlcuUTj9m3rI4Vd5Hj1qlzd1QwSoScWy/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}