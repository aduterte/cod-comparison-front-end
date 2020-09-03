import {atom} from "recoil"

export const userAtom = atom({
    key: "user-atom",
    default: {name: "NFamousWuN", network: "battle", gameName: "nfamouswun%25231861"}
})

export const userStatsAtom = atom({
    key: "user-stats",
    default: {}
})