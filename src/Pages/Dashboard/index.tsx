import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { MdSearch, MdKeyboardArrowRight } from 'react-icons/md'
import { 
    Container, 
    Header, 
    Search, 
    Options, 
    OptionDishe,
    ResgisterButton, 
    Info, BlogRead, 
    ContainerBlog,
    Contact,
    Footer,
    Links,
    TextInfo 
} from './styles'

//componentes
import Dishes from '../../Components/Dishes';
import Blog from '../../Components/Blog/index'
//imagens-Receitas
import DisheOne from '../../assets/comida_1.svg';
import DisheTwo from '../../assets/comida_2.svg';
import DisheThree from '../../assets/comida_3.svg';
import DisheFour from '../../assets/comida_4.svg';
//imagens-blog
import BlogOne from '../../assets/blog_image_1.svg';
import BlogTwo from '../../assets/bloco_image_2.svg';
import BlogThree from '../../assets/bloco_image_3.svg';
import BlogFour from '../../assets/bloco_image_4.svg';


function Dashboard() {
    const [scrollX, setScrollX] = useState<number>(0)
    const handleRightArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x < 0){
            x = 0;
        }
        setScrollX(x)
        
    }
  return (
      <>
        <Container>
            <h1>Healthy Food</h1>
            <Search>
                <h1>Ready for
                    Trying a new
                    recipe? 
                </h1>
                <input type="text" placeholder="Search healthy recipes" />
                <button><MdSearch /></button>
            </Search>
            <Header>
                
                    <a href="#Recipes" className="menu">HEALTHY RECIPES</a>
                    <a href="#Blog" className="menu">BLOG</a>
                    <a href="#Join" className="menu">JOIN</a>
                
                <ResgisterButton> <NavLink to="/sign-up" >REDIRECT</NavLink> </ResgisterButton>
            </Header>
        </Container>

        <Options id="Recipes">
            <h1>Our Best Recipes</h1>
            <p>Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.</p>

            <OptionDishe>  
                <Dishes Title={"Broccoli Salad with Bacon"} Image={DisheOne} />
                <Dishes Title={"Classic Beef Burgers"} Image={DisheTwo} />
                <Dishes Title={"Classic Potato Salad"} Image={DisheThree} />
                <Dishes Title={"Cherry Cobbler on the Grill"} Image={DisheFour} />
            </OptionDishe>    
        </Options>

        <Info>
            <TextInfo>
            <h1>The best services ready To serve you</h1>
            <p>Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts</p>
            <p>Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.</p>    
            <p>A small river named Duden flows by their place and
                supplies it with the necessary regelialia.</p> 
            <button>Know More</button>   
            </TextInfo>
        </Info>

        <ContainerBlog id="Blog">
            <h1>Read Our Blog</h1>
            <p>Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.</p>

        <BlogRead>
            <Blog image={BlogOne} text={"Quick-start guide to nuts and seeds"} name={"Kevin Ibrahim"} margin={scrollX} />
            <Blog image={BlogTwo} text={"Nutrition: Tips forImproving Your Health"} name={"Mike Jackson"} margin={scrollX}/>
            <Blog image={BlogThree} text={"The top 10 benefits of eating healthy"} name={"Bryan McGregor"} margin={scrollX} />
            <Blog image={BlogFour} text={"The top 10 benefits of eating healthy"} name={"Bryan McGregor"} margin={scrollX}/>
            <button className="Right" onClick={handleRightArrow}><MdKeyboardArrowRight/></button>
        </BlogRead>
        </ContainerBlog>

        <Contact id="Join">
            <h1>Join our membership to get special offer</h1>
            <input type="text" placeholder="Enter your email address"/>
            <button type="button" >Join</button>
        </Contact>
        
        <Footer>
            <h2>© Copyrights 2019 Stack. All Rights Reserved.© Copyrights 2019 Stack. All Rights Reserved.</h2>
            <Links>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </Links>
        </Footer>
    </>
  );
}

export default Dashboard;
