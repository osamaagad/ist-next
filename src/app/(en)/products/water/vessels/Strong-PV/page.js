import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="S80S SERIES"
    images={[
      '/water-product/vessels/Strong-PV/Strong-PV.png',
      '/water-product/vessels/Strong-PV/Strong-PV1.png',
    ]}
    details={[
      ['Availability', 'Available'],
      ['Category', 'Vessels']
    ]}
  >
    <a href="https://drive.google.com/file/d/1L1BdJnNDNiZykuwlNwW7qYg5chZnhmGz/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}