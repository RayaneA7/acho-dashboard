import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Table = ({search,setSearch,searchNav,setSearchNav}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let results = await axios.get("http://127.0.0.1:5000/filesList");
        setData(results.data);
        setFilteredData(results.data)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(()=>{
    const filteredResult =data.filter(item => item.data[search.feature].toLowerCase().includes(search.value.toLowerCase()))
    setFilteredData(filteredResult)
  },[search])

  useEffect(()=>{
    const filteredResult =data.filter(item => item.data.titre.toLowerCase().includes(searchNav.toLowerCase()))
    setFilteredData(filteredResult)
  },[searchNav])

  const download_csv = async (titre,name, type) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/download?original_filename=${name}&data_type=${type}`,
        {
          responseType: 'blob', // Specify that the response should be treated as a binary blob
        }
      );
  
      // Create a URL for the blob data and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${titre}.${type}`); // Specify the desired filename
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      titre
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Creation
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Createur
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Telecharger
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(data)}
                  {filteredData.map((variable, index) => (
                    
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={index}
                    >
                      {console.log(variable )}
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {variable.data.titre}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {variable.data.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {variable.data.user}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex">
                          <button
                            className="bg-[#6FE1C6] border-[#16C098] text-[#008767] border-2 px-2 lg:px-4 rounded font-bold"
                            onClick={() => {
                              download_csv(
                              variable.data.titre,
                                variable.filename,
                                "csv"
                              );
                            }}
                          >
                            csv
                          </button>
                          <button
                            className="bg-[#FFC5C5] border-[#DF0404] text-[#DF0404] border-2 px-2  lg:px-4 rounded ml-1 lg:ml-3 font-bold"
                            onClick={() => {
                              download_csv(
                                variable.data.titre,
                                variable.filename,
                                "json"
                              );
                            }}
                          >
                            json
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex ">
                          <button className=" bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg">
                            <Link href={`/Questionnaires/${variable.filename}?message=${variable.data.titre}`}>Univariée</Link>
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex ">
                          <button className=" bg-[#3F4E6B] text-white px-2 rounded py-1 ml-1 lg:ml-3 lg:px-4 hover:shadow-lg">
                            <Link href={`/multivars/${variable.filename}?message=${variable.data.titre}`}>Multivariée</Link>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
