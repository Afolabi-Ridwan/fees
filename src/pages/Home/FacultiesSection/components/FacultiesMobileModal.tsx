import { useEffect } from "react";
import { useModalStateContext } from "../../../../contexts/ModalContext";
import ProfileCard from "./ProfileCard";

const FacultiesMobileModal: React.FC = () => {
    const { isExpanded } = useModalStateContext();


    useEffect(() => {
        document.body.style.overflow = isExpanded ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isExpanded]);

    if (!isExpanded) return null;

    return (
            <div className={`fixed inset-0 flex justify-center  z-30 overflow-y-auto`}>
                    <ProfileCard/>
            </div>
    );
};

export default FacultiesMobileModal;