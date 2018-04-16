import { Tag } from '../../lib'
import styles from './list.sass'

export class CardList extends Tag {
    constructor(tag, { cards }) {
        super(tag, styles)
        tag.cards = cards
    }
}