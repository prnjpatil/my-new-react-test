import "./Card.css";

const Card = ({title , description , thumbnail}) => {

    return(
        <div className="card">
            <img src={thumbnail} alt={title} />
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    )
}
export default Card;