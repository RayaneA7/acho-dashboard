import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pagination from '../components/Home/Pagination'
import Search from '../components/Home/Search'
import Statistics from '../components/Home/Statistics'
import Table from '../components/Home/Table'
import { useEffect, useState } from 'react'
import axios from 'axios'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [search,setSearch]=useState({feature:"titre",value:""})

  return (
    <>
      <div
        style={{ height: '100vh' }}
        className='py-20 px-20 lg:px-[180px] '
      >
        <div className=''>
          <Statistics></Statistics>
        </div>

        <div className='mt-16 bg-white  px-10 lg:px-20 py-8  rounded-2xl'>
          <div className='w-full flex justify-between mb-4'>
            <h1 className='text-2xl font-bold'>Liste des formulaires</h1>
            <Search search={search} setSearch={setSearch}></Search>
          </div>

          <Table search={search} setSearch={setSearch}></Table>

          <div className='mt-10 w-full flex  justify-end'>
            <Pagination></Pagination>

          </div>
        </div>
      </div></>
  )
}
