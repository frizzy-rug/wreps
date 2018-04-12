import { Tag } from '../../lib'
import { styles } from './list.style'

export class CardList extends Tag {
    constructor(tag, { cards }) {
        super(tag, styles)
        tag.cards = cards
    }
}