import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layouts/Header";

const products = [
    {
        id: 1,
        name: "لته آرت",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cappuccino_Chiang_Mai.JPG/220px-Cappuccino_Chiang_Mai.JPG",
        price: 20000
    },{
        id: 2,
        name: "اسپرسو",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
        price: 12000
    },{
        id: 3,
        name: "کاپوچینو",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
        price: 15000
    },{
        id: 4,
        name: "کاپوچینو",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
        price: 15000
    },{
        id: 5,
        name: "کاپوچینو",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
        price: 15000
    },{
        id: 6,
        name: "کاپوچینو",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
        price: 15000
    },
]


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home products={products}/>}/>
            </Routes>
        </>
    );
}

export default App;
