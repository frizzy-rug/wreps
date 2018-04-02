app
    h1 Visit
    card-list(cards='{ cards }')
    div.tick aa
    script.
        import './card'
        this.cards = [
            { name: 'a', url: 'aaa', views: 123 },
            { name: 'b', url: 'bbb', views: 456 },
            { name: 'c', url: 'ccc', views: 789 }
        ]
    style.
        \:scope > .tick
            color: green
