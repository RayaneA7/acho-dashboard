const Table = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>
                      titre
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Creation
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Modification
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Createur
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Telecharger
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      Qualite de connexion
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix de pain
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix des fruits
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix des fruits
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix des fruits
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix des fruits
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className='border-b dark:border-neutral-500'>
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>
                      prix des fruits
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>17/08/2023</td>
                    <td className='whitespace-nowrap px-6 py-4'>Hichem</td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex'>
                        <button className='bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold'>
                          csv
                        </button>
                        <button className='bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold'>
                          json
                        </button>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      <div className='flex '>
                        <button className=' bg-[#3F4E6B] text-white px-2 lg:px-4 rounded py-1 hover:shadow-lg'>
                          Editer
                        </button>
                        <button className=' bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg'>
                          Resultats
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
