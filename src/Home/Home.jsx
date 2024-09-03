import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import mountain from '../assets/images/mountain.jpg';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="my-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img src={mountain} alt='mountain'/>
                        <Carousel.Caption className='caption'>
                        <h1>Goodness and Mercy</h1>
                        <p>Receive the unceasing wave, after wave of Grace God has for you</p>
                        <Button variant='warning' size='lg'>Learn More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={mountain} alt='mountain'/>
                        <Carousel.Caption>
                        <h1>God is Love</h1>
                        <p>For God did not send his son into the world to condemn the world, bbut to save the world through him John 13:7</p>
                        <Button variant='warning' size='lg'>Learn More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={mountain} alt='mountain'/>
                        <Carousel.Caption>
                        <h1>Blessed Assurance</h1>
                        <p>
                            Oh what a foretaste of Glory Divine.
                        </p>
                        <Button variant='warning' size='lg'>Learn More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='upcoming-event'>
                <div>
                    <h3>UPCOMING EVENT</h3>
                    <h2 className='text-sm'>&quot;The Law Demands, but Grace Supplies&quot; - Pastor Akiola J.P</h2>
                </div>
                <div>
                    <Button variant='warning'>PROGRAM DETAILS</Button>
                </div>
            </div>
        </>
    );
}

export default Home;