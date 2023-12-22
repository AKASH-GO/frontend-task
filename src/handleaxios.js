import axios from 'axios'
import { ApiTable, BASEURL, METHOD } from "./Util/apiTable";

const Handleaxios = async (event, value, searchinput) => {
    try {
        // let axiosURL = `${BASEURL}${searchinput ? `/${searchinput}` : ''}${axiosvalue.label}${value ? `/${axiosCategory.label}` : ''}`;

        let axiosURL = BASEURL;
        if (searchinput) {
            if (event === 'channel') {

                axiosURL += `data/detail/${searchinput}`;
            } else {
                axiosURL += `data/${searchinput}`;
            }
        } else {
            if (event) {
                const axiosvalue = ApiTable[event];
                axiosURL += axiosvalue.label;
            } else {
                axiosURL += 'data/'
            }
            if (value) {
                const axiosCategory = ApiTable[value];
                axiosURL += `${axiosCategory.label}`;
            }
        }
        axios.defaults.headers.common['ngrok-skip-browser-warning'] = "69420"
        const datavalue = await axios[METHOD](axiosURL);
        return datavalue


    } catch {
        console.log(Error)
    }
}
export default Handleaxios;

