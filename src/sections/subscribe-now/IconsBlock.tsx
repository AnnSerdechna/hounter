import {FC} from 'react'
import {Avatar} from 'antd'

const IconsBlock: FC<{ ImgSrc_1: string, ImgSrc_2: string, AvaSrc_1: string, AvaSrc_2: string }> = ({ ImgSrc_1, ImgSrc_2, AvaSrc_1, AvaSrc_2 }) => (
  <>
    <img className={'image1'} alt={'home'} src={ImgSrc_1} />
    <Avatar className={'avatar1'} size={36} src={AvaSrc_1} />
    <img className={'image2'} alt={'home'} src={ImgSrc_2} />
    <Avatar className={'avatar2'} size={36} src={AvaSrc_2} />
  </>
)

export const IconBlockRight = () => (
  <IconsBlock
    ImgSrc_1={'https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/mbr-1657190156-S8bl9/01-br-1664372169-V7niT.jpg'}
    ImgSrc_2={'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg'}
    AvaSrc_1={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
    AvaSrc_2={'https://t3.ftcdn.net/jpg/04/51/06/44/360_F_451064403_BScCy7mo4j790j5rjPVpd6umxwuy2YTO.jpg'}
  />
)

export const IconBlockLeft = () => (
  <IconsBlock
    ImgSrc_1={'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg'}
    ImgSrc_2={'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80'}
    AvaSrc_1={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxv0P4qDS_KAn-lIeyKpOSVEM87pPKbIVIQ&usqp=CAU'}
    AvaSrc_2={'https://www.aamc.org/sites/default/files/aamcnews-jonathan-metzl.jpg'}
  />
)
