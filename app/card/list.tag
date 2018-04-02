card-list
    p a
    div.tick(each='{ cards }') { name }
    script.
        this.cards = opts.cards
