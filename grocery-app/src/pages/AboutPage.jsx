import Navbar from "../components/Navbar"

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="display-4">About Us</div>
                <p className="lead">This is about page</p>
            </div>
            <div className="container">
                <section>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Et quam asperiores laborum tempora nihil sed quod, libero doloremque provident
                        id rerum sint molestiae, nostrum eos quasi repellat vero voluptatem excepturi.
                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Et quam asperiores laborum tempora nihil sed quod, libero doloremque provident
                        id rerum sint molestiae, nostrum eos quasi repellat vero voluptatem excepturi.
                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Et quam asperiores laborum tempora nihil sed quod, libero doloremque provident
                        id rerum sint molestiae, nostrum eos quasi repellat vero voluptatem excepturi.
                    </p>
                </section>
            </div>
        </>
    )
}
export default AboutPage