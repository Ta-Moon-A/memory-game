export interface CardItem {
    cardNumber: number,
    isOpen: boolean,
    isSolved: boolean,
    cardPoint: number,
    cardType: CardType
}

export enum CardType {
    symbol = 1,
    picture = 2
}