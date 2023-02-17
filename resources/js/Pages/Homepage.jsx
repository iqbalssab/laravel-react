import React, { useState } from 'react'
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Homepage/Card';
import Paginator from '@/Components/Homepage/Paginator';


const Homepage = (props) => {
  
  return (
    <div className='container bg-yellow-200 mx-auto min-h-screen mt-2 mb-20 pb-5'>
    <Head title={props.title} />
    <Navbar user={props.auth.user} />    
    <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-center'>
        <Card posts={props.posts.data} />
    </div>
    <div className='flex justify-center'>
        <Paginator meta={props.posts.meta}/>
    </div>
    </div>
  )
}

export default Homepage