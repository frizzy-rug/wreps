import tag from '../tag'
import './item'

@tag({
    tpl: `
<card-item each="{ cards }" style='display: block'></card-item>
`
})
class CardList {
    init(opts) {
        this.cards = [
            { name: 'a', url: 'aaa', views: 123 },
            { name: 'b', url: 'bbb', views: 456 },
            { name: 'c', url: 'ccc', views: 789 }
        ]
    }
}
