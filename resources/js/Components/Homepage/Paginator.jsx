import React from 'react'
import { Link } from '@inertiajs/react';

const Paginator = ({meta}) => {
    
    const prev = meta.links[0].url
    const next = meta.links[meta.links.length - 1].url
    const current = meta.current_page
  
return (
    <div className="btn-group">
        {current == 1 ? (
        <Link href={prev} className="btn" disabled>«</Link>
        ) :
        <Link href={prev} className="btn">«</Link>
         }
        <button className="btn btn-outline">Page  {current}</button>
         {next && <Link href={next} className="btn">»</Link>}
    </div>
  )
}

export default Paginator