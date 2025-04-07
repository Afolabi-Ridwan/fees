type cardType ={
    id: number,
    name: string,
    image: string,
    title: string,
    bio: string,
    comment: string,
    courses: string[],
}

export type profileImageAndBioType = {
    card: cardType,
    index: number
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