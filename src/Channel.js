import { useEffect, useState } from "react";
import Handleaxios from './handleaxios';

function Channel(props) {
    const [channelData, setChannelData,] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        try {
            //if(channelData.length <= 0){
            let result = await Handleaxios('channel', null, props.item);
            console.log("channel-result: ", result.data)
            setChannelData([result.data]);
            //}
        } catch (error) {
            console.error('Error fetching data in Channel:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.item]);

    return (
        <div>
            <table className='border-collapse border border-black w-full mt-[15px]'>
                <thead>
                    <tr className='border-b border-black'>
                        <th className='border-r border-black p-2'>org_id</th>
                        <th className='border-r border-black p-2'>channel</th>
                        <th className='border-r border-black p-2'>isdisabled</th>
                        <th className='border-r border-black p-2'>isdisconnected</th>
                        <th className='border-r border-black p-2'>updatedat</th>
                        <th className='border-r border-black p-2'>email_campaign_module</th>
                        <th className='border-r border-black p-2'>review_module</th>
                        <th className='border-r border-black p-2'>buybox_module</th>
                        <th className='border-r border-black p-2'>keyword_module</th>
                        <th className='border-r border-black p-2'>pricing_module</th>
                        <th className='border-r border-black p-2'>ppr_module</th>
                        <th className='border-r border-black p-2'>modularity</th>
                        <th className='border-r border-black p-2'>inventory_module</th>
                    </tr>
                </thead>
                <tbody>
                    {channelData?.map((channel, index) => (
                        <tr key={index} className='border-b border-black'>
                            <td className='border-r border-black p-2'>{channel.orgid !== null ? channel.orgid.toString(): 'null'}</td>
                            <td className='border-r border-black p-2'>{channel.channel !== null ? channel.channel.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.isdisabled !== null ? channel.isdisabled.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.isdisconnected !== null ? channel.isdisconnected.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.updatedat !== null ? channel.updatedat.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.email_campaign_module !== null ? channel.email_campaign_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.review_module !== null ? channel.review_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.buybox_module !== null ? channel.buybox_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.keyword_module !== null ? channel.keyword_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.pricing_module !== null ? channel.pricing_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.ppr_module !== null ? channel.ppr_module.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.modularity !== null ? channel.modularity.toString(): 'Null'}</td>
                            <td className='border-r border-black p-2'>{channel.inventory_module!== null ? channel.inventory_module.toString(): 'Null'}</td>
                            <td className='p-2 flex items-center justify-center'>   
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Channel;
