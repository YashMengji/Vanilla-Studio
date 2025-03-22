import "./TeamCard.css";

export default function TeamCard({ image, title, desc, instagram, twitter, linkedin, github }) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={image} alt={title} />
            </div>
            <p className="card-title">{title}</p>
            <p className="card-des">{desc}</p>
            <div className="link-container">
                <div className="social-links">
                    <a className="instagram" href={instagram}><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className="social-links">
                    <a className="twitter" href={twitter}><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <div className="social-links">
                    <a className="linkedin" href={linkedin}><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="social-links">
                    <a className="github" href={github}><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}