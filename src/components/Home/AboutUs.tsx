import about_img from '../../assets/images/furnitures/furniture8.svg'

const AboutUs = () => {
    return (
        <div className='about-us-section'>
            <div className="row">
                <div className="col-12 about-us-title">
                    <h1>ABOUT US</h1>
                </div>
                <div className="col-lg-6 about-us-img">
                    <img src={about_img} alt="about-us" />
                </div>
                <div className="col-lg-6 about-us-content">
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta 
                        nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere 
                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. <br /><br /> Temporibus autem quibusdam 
                        et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae 
                        sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                        reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                        repellat.  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;