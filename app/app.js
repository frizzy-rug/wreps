export class App {
    constructor(tag) {
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
