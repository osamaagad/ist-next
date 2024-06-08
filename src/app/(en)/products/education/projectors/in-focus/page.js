import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="In-Focus GENESIS IN114BB"
    images={[
      '/education-product/projectors/in-focus/in-focus.png',
      '/education-product/projectors/in-focus/in-focus1.webp',
      '/education-product/projectors/in-focus/in-focus2.jpg',
    ]}
    details={[
      ['Availability', 'Available'],
      ['Light Output', '3800 Lumen'],
      ['Category', 'Projectors']
    ]}
  >
    <a href="https://drive.google.com/file/d/1HwdEXJiAFwNYpJo8LWaYCNOOhiL1IxNo/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Click Here</a>
    <hr/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}