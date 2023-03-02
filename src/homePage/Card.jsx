const Card = ({title , description , thumbnail}) => {

    return(
        <div className="card">
            <img src={thumbnail} alt={title} />
            <div className="card-main">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Card;