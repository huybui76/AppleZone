import React from "react"
import Flashsales from "../../components/Flashsales/Flashsales"
import SlideAnimate from "../../components/SlideAnimate/SlideAnimate"
import Footer from "../../components/Footer/Footer"
import "./Homepage.css"
import slide1 from "../../assets/animate1.webp"
import slide2 from "../../assets/animate2.webp"
import slide3 from "../../assets/animate3.webp"
import slide4 from "../../assets/animate4.webp"

// import slide1 from '../../assets/animate1.webp';
// import slide2 from '../../assets/animate2.webp';
// import slide3 from '../../assets/animate3.webp';
// import slide4 from '../../assets/animate4.webp';

const Homepage = () => {
    const searchProduct = useSelector((state) => state?.product?.search);
    const searchDebounce = useDebounce(searchProduct, 500);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(6);
    const [typeProducts, setTypeProducts] = useState([]);

    const fetchAllProduct = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1];
        const search = context?.queryKey && context?.queryKey[2];
        try {
            const res = await ProductService.getAllProduct(search, limit);
            return res;
        } catch (error) {
            console.error('Lỗi khi thực hiện yêu cầu Axios: ', error);
            throw error;
        }
    };

    const fetchAllTypeProduct = async () => {
        try {
            const res = await ProductService.getAllTypeProduct();
            if (res?.status === 'OK') {
                setTypeProducts(res?.data);
                console.log('producttype', res?.data)
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện yêu cầu Axios: ', error);
        }
    };


    // const { isLoading, data: products, isPreviousData } = useQuery(
    //     ['products', limit, searchDebounce],
    //     fetchAllProduct,
    //     { retry: 3, retryDelay: 1000, keepPreviousData: true }
    // );

    useEffect(() => {
        fetchAllTypeProduct();
    }, []);

    return (
        //<Loading isLoading={isLoading || loading}>
        <div className="container">
            <div className="body">
                <div>
                    <SlideAnimate
                        images={[slide1, slide2, slide3, slide4]}
                        key={1}
                    />
                </div>
                <Flashsales />
                <BoxSlides />
                <Footer />
            </div>
        </div>
        //</Loading>
    );
};

export default Homepage;
