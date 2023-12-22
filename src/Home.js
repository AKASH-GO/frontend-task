import { useEffect, useState } from 'react';
import './Home.css';
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import Handleaxios from './handleaxios';
import Channel from './Channel';
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [enteredInput, setEnteredInput] = useState('');
    const [detailButton, setDetailButton] = useState(false)
    const [channelitems, setChannelitems] = useState('')

    // ----------------  Default Home page Table Status  ------------
    const fetchData = async () => {
        try {
            setLoading(true);
            let result = await Handleaxios("display", null);
            setData(result.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data in display:', error.message);
            setLoading(false);
        }
    };
    // ----------------  handling Sorting  --------------
    const handleSort = async (event, value) => {
        if (event === 'ASC') {
            let result = await Handleaxios("sortasc", value);
            setData(result.data);
        } else {
            let result = await Handleaxios("sortdesc", value);
            console.log("sortdesc", value)
            setData(result.data)
        }
    };
    //------------- handling the search inputs and displaying ---------------
    const handlesearchbutton = async () => {
        let result = await Handleaxios(null, null, enteredInput ? enteredInput : null);
        setData(result.data);
        setEnteredInput('')
    }

    // -------------detailbutton---------------
    const handleDetail = (item) => {
        console.log(item.org_id)
        setChannelitems(item.org_id);
        setDetailButton(true);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (

        detailButton ? (<Channel item={channelitems} />) :
            <div>

                <div className=''>
                    {/* ------  input-box   ----- */}
                    <input placeholder='Search-Box'
                        onChange={(e) => setEnteredInput(e.target.value)}
                        className='border-gray-700 border-[1px] ml-[10%] px-[80px] py-[10px] mt-[10px] outline-none rounded-full text-center'>
                    </input>
                    {/* ---------  search Icon  ------------ */}
                    <button onClick={handlesearchbutton}
                        className='absolute -ml-[330px] mt-[22px] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>


                {/* ------------  table  ---------- */}
                {!loading ? (
                    <div>
                        <table className='border-collapse border border-black w-full mt-[15px]'>
                            <thead>
                                <tr className='border-b border-black'>
                                    <th className='border-r border-black p-2 '>org_id
                                        <BsCaretUpFill className='ml-[80px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'orgid')} />
                                        <BsCaretDownFill className='ml-[80px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'orgid')} />
                                    </th>
                                    <th className='border-r border-black p-2'>org_name
                                        <BsCaretUpFill className='ml-[200px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'orgname')} />
                                        <BsCaretDownFill className='ml-[200px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'orgname')} />
                                    </th>
                                    <th className='border-r border-black p-2'>adslastsyncat
                                        <BsCaretUpFill className='ml-[160px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'adslastsyncat')} />
                                        <BsCaretDownFill className='ml-[160px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'adslastsyncat')} />
                                    </th>
                                    <th className='border-r border-black p-2'>inventorylastsyncat
                                        <BsCaretUpFill className='ml-[180px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'inventorylastsyncat')} />
                                        <BsCaretDownFill className='ml-[180px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'inventorylastsyncat')} />
                                    </th>
                                    <th className='border-r border-black p-2'>orderslastsyncat
                                        <BsCaretUpFill className='ml-[160px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'orderslastsyncat')} />
                                        <BsCaretDownFill className='ml-[160px] hover:shadow:lg hover:shadow-red-500 ' onClick={() => handleSort('DESC', 'orderslastsyncat')} />
                                    </th>
                                    <th className='border-r border-black p-2'>paymentslastsyncat
                                        <BsCaretUpFill className='ml-[180px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'paymentslastsyncat')} />
                                        <BsCaretDownFill className='ml-[180px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'paymentslastsyncat')} />
                                    </th>
                                    <th className='p-2'>returnslastsyncat
                                        <BsCaretUpFill className='ml-[220px] -mt-[25px] hover:shadow-lg  hover:shadow-blue-500' onClick={() => handleSort('ASC', 'returnslastsyncat')} />
                                        <BsCaretDownFill className='ml-[220px] hover:shadow:lg hover:shadow-red-500' onClick={() => handleSort('DESC', 'returnslastsyncat')} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item =>
                                    <tr key={item.org_id} className='border-b border-black'>
                                        <td className='border-r border-black p-2'>{item.org_id}</td>
                                        <td className='border-r border-black p-2'>{item.org_name || 'Null'}</td>
                                        <td className='border-r border-black p-2'>{item.adslastsyncat || 'Null'}</td>
                                        <td className='border-r border-black p-2'>{item.inventorylastsyncat || 'Null'}</td>
                                        <td className='border-r border-black p-2'>{item.orderslastsyncat || 'Null'}</td>
                                        <td className='border-r border-black p-2'>{item.paymentslastsyncat || 'Null'}</td>
                                        <td className='p-2 flex items-center justify-center'>
                                            {item.returnslastsyncat || 'Null'}
                                            <button onClick={() => handleDetail(item)} className={item.returnslastsyncat ?
                                                'border-gray-700 border-[1px] px-[10px] py-[1px] ml-[20px] rounded-md' :
                                                'border-gray-700 border-[1px] px-[10px] py-[1px] ml-[180px] rounded-md'}>
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
    );
}

export default Home;
