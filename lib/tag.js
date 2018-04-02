import riot from 'riot'

function toKebab(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, '-')
        .toLowerCase()
}

function init(com) {
    return function() {
        this.mixin(com)
    }
}

export default function tag({
    name,
    tpl,
    template = '',
    styles,
    attrs
}) {
    return (ctor) => {
        name = toKebab(name || ctor.name)
        tpl = tpl || template
        if (name) {
            const com = new ctor({
                name,
                tpl,
                styles,
                attrs
            })
            com.tmpl = tpl
            riot.tag(name, tpl, styles, attrs, init(com))
        }
    }
}