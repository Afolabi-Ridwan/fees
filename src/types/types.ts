import { NavigateFunction } from "react-router"

type cardType = {
    id: number,
    name: string,
    image: string,
    title: string,
    bio: string,
    comment: string,
    courses: string[],
}


export interface AccordionItemPropType {
    header: string;
    text?: string;
    icon: string;
    id: number;
    isOpen: boolean;
    setOpenItem: React.Dispatch<React.SetStateAction<number>>;
  }

export type profileImageAndBioType = {
    card: cardType,
    index: number
}

export interface ModalStateContextType {
  modalState: boolean;
  modalStateHandler: (state?: boolean) => void;
}

export type commentType = {
    isExpanded?: boolean,
    card: cardType
}

export type cardNavType = {
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    card: cardType,
    index: number,
    prevSlide: () => void,
    nextSlide: () => void,
}

export type formDataType = {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    phone: string;
    countryCode: string;
    country?: string;
    track?: {
        value: string,
        price: string
    };
    termsAccepted: boolean;
};


export interface formParams {
    heading?: string,
    formType?: string,
    formErrors?: { [key: string]: string };
    setFormErrors?: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
    formData: formDataType,
    setFormData: React.Dispatch<React.SetStateAction<formDataType>>
}


export type handleSubmitParams = {
    e?: React.FormEvent
    formType?: string,
    formData: formDataType,
    navigate?: NavigateFunction
}

export interface NavButtonParams {
    currentQuestion: number,
    quizData: { question: string; answers: { id: string; text: string; }[] }[],
    setDirection: React.Dispatch<React.SetStateAction<number>>,
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
    selectedAnswers: (string | null)[];
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
    modalStateHandler: (state?: boolean | undefined) => void
}