import React from 'react'
import Featured_card from '../components/HomeComponents/Featured_card';
import Hero from '../components/HomeComponents/Hero';
import backGround from '../images/header-image-no.png'
import styled from 'styled-components';
import Number_section from '../components/HomeComponents/Number_section';

const Home = () => {

    return (
        <>
            <main>
                <div className="cube_bg" style={{ zIndex: -1, backgroundImage: "url( " + `${backGround}` + "  )", backgroundSize: 'cover' }}>
                {/* <Overlay>
                    <img style={{ minHeight: '100vh' }} src={backGround} alt="" />
                </Overlay> */}
                <Hero />
                </div>
                <Featured_card />
                <Number_section />
            </main>

        </>
    )
}


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  margin-bottom: 2rem;
  height: 100vh;
`

export default Home
