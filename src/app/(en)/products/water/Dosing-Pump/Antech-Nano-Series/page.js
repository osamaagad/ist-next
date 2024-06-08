import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="Nano A"
    images={[
      '/water-product/Dosing-Pump/Antech-Nano-Series/Antech.png',
      '/water-product/Dosing-Pump/Antech-Nano-Series/Antech1.png',
      '/water-product/Dosing-Pump/Antech-Nano-Series/Antech2.png',

    ]}
    details={[
      ['Availability', 'Available'],
      ['Category', 'Dosing Pump']
    ]}
  >
    <a href="https://drive.google.com/file/d/1BB8CqxPZ-uzZ8n-XV7c36EZrvKPHzIpM/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}