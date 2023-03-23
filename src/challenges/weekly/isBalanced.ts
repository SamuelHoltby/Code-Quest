/* eslint-disable no-useless-escape */
enum BracketTypes {
    OPEN,
    CLOSED,
}

type BracketPairType = {
    open: string
    closed: string
    type?: BracketTypes
}

const bracketPairs: BracketPairType[] = [
    {
        open: '{',
        closed: '}',
    },
    {
        open: '[',
        closed: ']',
    },
    {
        open: '(',
        closed: ')',
    },
]

const getBracketPair = (bracket: string): null | BracketPairType => {
    const foundPair = bracketPairs.find(
        ({ open, closed }) => bracket === open || bracket === closed
    )

    if (!foundPair) {
        return null
    }

    const pair: BracketPairType = {
        ...foundPair,
        type:
            bracket === foundPair.open
                ? BracketTypes.OPEN
                : BracketTypes.CLOSED,
    }

    return pair
}

export const isBalanced = (text: string): boolean => {
    if (!text || text === '') {
        return true
    }

    const bracketsOnly = text.replace(/[^()\[\]{}]/g, '')
    const bracketText = [...bracketsOnly]

    const bracketTrack = []

    for (const bracket of bracketText) {
        const bracketPair = getBracketPair(bracket)

        if (!bracketPair) {
            return false
        }

        if (bracketPair.type === BracketTypes.OPEN) {
            bracketTrack.push(bracket)
        } else if (bracketPair.type === BracketTypes.CLOSED) {
            const latestBracket = bracketTrack[bracketTrack.length - 1]

            //check latest bracket is the open pair
            if (latestBracket === bracketPair.open) {
                //remove latest bracket
                bracketTrack.pop()
            } else {
                //invalid pairing
                return false
            }
        }
    }

    return bracketTrack.length === 0
}
