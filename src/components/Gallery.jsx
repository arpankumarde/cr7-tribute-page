import React from 'react'

const Gallery = () => {
  return (
    <section className='bg-primary p-4 lg:p-8 flex flex-col justify-center items-center' id="gallery">
      <h2 className='text-white text-4xl font-monoton mb-2'>CR7 In Action</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
        <img className='max-auto rounded-lg h-56 w-52 object-cover' src="https://th.bing.com/th/id/OIP.u9VYUbSxfBIFj4x3y6rHFAHaKd?pid=ImgDet&rs=1" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://im.rediff.com/sports/2015/jan/13ronaldo3.jpg?w=670&h=900" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover object-left' src="https://1.bp.blogspot.com/_fnoMEQhhaoA/Sjb7pbAvF_I/AAAAAAAADS0/lfZe8hxCqR8/s400/cristiano+ronaldo+manchester+united+1.jpg" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2018/02/nintchdbpict000385235998.jpg?strip=all&w=960&quality=100" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://netstorage-tuko.akamaized.net/images/0fgjhs5f1qopmcjem.jpg?imwidth=900" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover object-bottom' src="https://wallpapercave.com/wp/wp11239783.jpg" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://wallpapercave.com/wp/wp11239797.jpg" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://storage.googleapis.com/afs-prod/media/05a2af5553164e17a7bd0ee0ce373384/3000.jpeg" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover object-top' src="https://www.xtrafondos.com/en/descargar.php?id=2967&vertical=1" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://3.bp.blogspot.com/-ClRX4WcTPgU/V3VNco_R1pI/AAAAAAAAEmw/YfG6Jq13IxMlw0kyIGaTRLgVB6oBNsUlgCHM/s1600/cristiano-ronaldo-in-red-t-shirt-images-this-wallpapers.jpg" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-07/cristiano%20ronaldo%20al%20nassr%202023-2024.jpg.webp" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://images.news18.com/ibnlive/uploads/2017/12/Cristiano-Ronaldo-holding-the-Ballon-d-Or.jpg?impolicy=website&width=875&height=0" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://cdn.images.express.co.uk/img/dynamic/67/590x/secondary/Cristiano-Ronaldo-CWC-trophy-760429.jpg?r=1686998680160" alt="" />
        <img className='rounded-lg h-56 w-52 object-cover' src="https://media.almayadeen.tv/archive/image/2021/2/5/9949f8cb-c52a-48e9-bf1f-59e9a2a0bb0d.jpg" alt="" />
      </div>
    </section>
  )
}

export default Gallery