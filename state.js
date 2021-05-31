import { atom } from 'jotai'

const cartmodal = atom(false)
const trending = atom([])
const discovery = atom([])

export {
    cartmodal,
    trending,
    discovery
}