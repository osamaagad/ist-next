import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="Z-Plus"
    images={[
      '/water-product/Membranes/z-plus/z-plus.jpg',
      '/water-product/Membranes/z-plus/z-plus1.WEBP',
    ]}
    details={[
      ['Availability', 'Available'],
      ['Modle', 'BW , LP'],
      ['Category', 'Membranes']
    ]}
  >
    <a href="https://drive.google.com/file/d/1m1HWq8DyXHU5gyYD9TakYHSjEQZ7M_pi/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>Z Plus 17</a>
    <a href="https://drive.google.com/file/d/1VP6DnRWIJuYH0_nX3rJvrex5Gtx0QHrH/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>ZP-BW8040</a><br/>
    <a href="https://drive.google.com/file/d/1V0hPVVq1sdVrZ8Vg4A7QN2-np_C5WJZr/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>ZP-BW4040</a>
    <a href="https://drive.google.com/file/d/17bzUntjBUkno4FWkdi3Zq8_guBncIX8g/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>ZP-LP4040</a><br/>
    <a href="https://drive.google.com/file/d/11kq_I_wfp_28qdgyw2RB2sMEvDRVHujS/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>ZP-LP8040</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}