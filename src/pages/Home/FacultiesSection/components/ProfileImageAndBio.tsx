import { cardsData } from "../../../../provider/data";
import Comment from "./Comment";

const ProfileImageAndBio = ({ card, index }: any) => {
    return (
        <div>
            <div className="image-and-comment">
                <img src={card.image} alt={card.name} className="card-image"/>
                <Comment card={card} />
            </div>
            <div className="flex justify-between items-center max-md:flex-col max-md:items-start  max-lg:mt-6">
                <div>
                    <h1 className="text-[40px] font-[600]">
                        {card.name.split(" ")[0]}
                    </h1>
                    <h1 className="text-[40px] font-[600]">
                        {card.name.split(" ")[1]}
                    </h1>
                </div>
                <div>
                    <span className="text-[45px] font-[600] max-md:hidden">
                        {index + 1}/{cardsData.length}
                    </span>
                </div>
                <p className="border-l-2 pl-2 italic md:hidden">
                    {card.title}
                </p>
            </div>
        </div>
    )
}

export default ProfileImageAndBio
