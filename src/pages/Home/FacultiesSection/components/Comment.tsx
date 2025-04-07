import headingIcon from "/public/assets/icons/Vector.png";


const Comment = ({isExpanded, card}: any) => {
    return (
        <div className={`card-info ${isExpanded ? "block" : "hidden"} md:block`}>
            <p className="heading">BIO</p>
            <p
                className="bio"
                dangerouslySetInnerHTML={{ __html: card.bio }}
            />
            <div>
                <img src={headingIcon} loading="lazy" alt="headingIcon" />
                <p className="mt-2 text-[14px]">
                    {card.comment}
                </p>
            </div>
            <div className="courses mt-6">
                <p className="heading">Courses Taught</p>
                <ul>
                    {card.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Comment
