import Product from "@/components/Product";

export default function ProductPage() {
  return <Product
    title="LG Membranes"
    images={[
      '/water-product/Membranes/LG-membranes/LC-HR.jpg',
      '/water-product/Membranes/LG-membranes/LC-HR1.jpg',
      '/water-product/Membranes/LG-membranes/LC-HR2.jpg',
      '/water-product/Membranes/LG-membranes/LC-HR3.jpg',
      '/water-product/Membranes/LG-membranes/LC-HR4.jpg',
      '/water-product/Membranes/LG-membranes/LC-HR5.png',
    ]}
    details={[
      ['Availability', 'Available'],
      ['Modle', 'BW , SW'],
      ['Category', 'Membranes']
    ]}
  >
    <a href="https://drive.google.com/file/d/1TvLda5fNhZ7ZrXk_Z-fk9w7e9wHGkApO/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>LG BW 4040ES</a>
    <a href="https://drive.google.com/file/d/1YJV4kudHsDci8MvSlLWejezUvMRvLLTf/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>LG BW 440ES</a><br/>
    <a href="https://drive.google.com/file/d/16iSY_GMUqkSZCv4AjU2ymAgHQBx5Uo2z/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>LG SW 400GR</a>
    <a href="https://drive.google.com/file/d/1uZqsONYIhjKNi_NYix8bnirTjv4uDox0/view?usp=drive_link" target="_blank"><img src="/pdf.gif"/>LG SW 440R</a>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </Product>
}