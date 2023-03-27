import React from 'react'
import {BsGithub, BsLinkedin, BsFillBookFill,BsFillEnvelopeAtFill} from "react-icons/bs"; 

function SocialItem({icon, link}) {

  const CustomTag = icon ;

  console.log(CustomTag) ;
  return (
    <div>
        <CustomTag size={50}/>
    </div>
  )
}

export default SocialItem
