import { useModalStateContext } from "../../../../contexts/ModalContext";
import { commentType } from "../../../../types/types";
import headingIcon from "/public/assets/icons/Vector.png";


const Comment = ({ card }: commentType) => {

    const {isExpanded} = useModalStateContext()
    
    return (
        <div className={`card-info ${!isExpanded && "hidden"} md:block`}>
            <div className={`card-info-content`}>
                <p className="heading">BIO</p>
                <p
                    className="bio"
                    dangerouslySetInnerHTML={{ __html: card.bio }}
                />
                <div>
                    <img src={headingIcon} loading="lazy" alt="headingIcon" />
                    <p className="mt-2 text-[14px] text-align-justify">
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
        </div>
    )
}

export default Comment
