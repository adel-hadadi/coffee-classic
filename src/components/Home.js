import {Button, Card, Col, Container, Row} from "react-bootstrap";
import './Home.css';
import Banner from '../assets/images/close-up-hand-pouring-milk-delicious-coffee-cup.jpg';
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";
import {Link} from "react-router-dom";

const Home = ({products}) => {
    return (
        <Container>
            <section className="banner">
                <Row className="h-100">
                    <Col className="h-100">
                        <img src={Banner} alt="Banner" className="banner-image h-100 rounded-3"/>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-end">
                        <h3>سفارش آنلاین قهوه از نزدیک ترین کافیشاپ</h3>
                        <p style={{maxWidth: '80%', marginRight: '25px', fontSize: "14px"}}>لورم ایپسوم متن ساختگی با
                            تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                            در شصت و سه درصد گذشته حال و آینده</p>
                        <Button>محصولات</Button>
                    </Col>
                </Row>
            </section>

            <section className="my-4">
                <h3 className="mb-3">بارگرم</h3>
                <Swiper spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                    {products ? products.map((product) => (
                        <SwiperSlide  key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top" src={product.image} style={{minHeight: "250px", maxHeight: "250px", objectFit: "cover"}}/>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Body>
                                            {product.price} تومان
                                        </Card.Body>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    )) : ""}
                </Swiper>
            </section>
        </Container>
    );
}

export default Home;