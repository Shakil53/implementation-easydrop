import axios from 'axios';

//instance of Axios
const api = axios.create({
  baseURL: 'https://api.example.com', 
  timeout: 10000, 
  headers: { 'Content-Type': 'application/json' },
});

// Utility function to fetch data from a given endpoint
export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};



// ----------------------------------------------------

const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const chartDataLoaded = data.data.data;
                const chartdata = chartDataLoaded.map(chart => {
                    const parts = chart.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: chart.phone_name,
                        price: price
                    }
                    return singlePhone
                })
                console.log(chartdata);
                setChartData(chartData)
        })
    },[])