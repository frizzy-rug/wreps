import { Tag } from '../lib'
import style from './app.sass'

export class App extends Tag {
    constructor(tag) {
        super(tag, style)
        tag.cnt = 0
        tag.cards = [
            { name: 'a', url: 'aaa', views: 123 },
            { name: 'b', url: 'bbb', views: 456 },
            { name: 'c', url: 'ccc', views: 789 }
        ]
        setTimeout(() => {
            tag.cnt = tag.cnt + 1
            tag.update()
        }, 1000)
    }
}
