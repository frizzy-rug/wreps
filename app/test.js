import tag from './tag'

@tag({
    tpl: `this <div class='red'> is</div>test { css }`,
    styles: `.red { color: red; }`
})
class TestP {
    init(opts) {}
}