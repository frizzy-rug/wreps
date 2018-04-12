import { Client } from 'styletron-engine-atomic'

const style = new Client()

export function cssInJs(css) {
    const obj = {}
    Object.keys(css).forEach(k => {
        obj[k] = style.renderStyle(css[k])
    })
    return obj
}
