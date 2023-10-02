
const Statistics = () => {
  return (
    <div className='bg-gray2 px-10 lg:px-40 w-full rounded-3xl shadow-md py-8 md:flex  md:justify-between flex-columns'>
      <div className='flex items-center'>
        <img src='/2.png' className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400 md:text-sm lg:text-lg'>nombre d'utilisateurs</h1>
            <h1 className=' font-bold md:text-lg lg:text-2xl' >5,423</h1>
        </div>
      </div>

      <div className='flex items-center'>
        <img src='/1.png' className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400'>nombre de reponses</h1>
            <h1 className='font-bold md:text-lg lg:text-2xl'>1,893</h1>
        </div>
      </div>

      <div className='flex items-center'>
        <img src='/3.png' className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400'>nombre de formulaires</h1>
            <h1 className='font-bold md:text-lg lg:text-2xl'>189</h1>
        </div>
      </div>
    </div>
  )
}

export default Statistics
