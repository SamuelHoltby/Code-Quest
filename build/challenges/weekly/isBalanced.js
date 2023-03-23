"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBalanced = void 0;
/* eslint-disable no-useless-escape */
var BracketTypes;
(function (BracketTypes) {
    BracketTypes[BracketTypes["OPEN"] = 0] = "OPEN";
    BracketTypes[BracketTypes["CLOSED"] = 1] = "CLOSED";
})(BracketTypes || (BracketTypes = {}));
const bracketPairs = [
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
];
const getBracketPair = (bracket) => {
    const foundPair = bracketPairs.find(({ open, closed }) => bracket === open || bracket === closed);
    if (!foundPair) {
        return null;
    }
    const pair = Object.assign(Object.assign({}, foundPair), { type: bracket === foundPair.open
            ? BracketTypes.OPEN
            : BracketTypes.CLOSED });
    return pair;
};
const isBalanced = (text) => {
    if (!text || text === '') {
        return true;
    }
    const bracketsOnly = text.replace(/[^()\[\]{}]/g, '');
    const bracketText = [...bracketsOnly];
    const bracketTrack = [];
    for (const bracket of bracketText) {
        const bracketPair = getBracketPair(bracket);
        if (!bracketPair) {
            return false;
        }
        if (bracketPair.type === BracketTypes.OPEN) {
            bracketTrack.push(bracket);
        }
        else if (bracketPair.type === BracketTypes.CLOSED) {
            const latestBracket = bracketTrack[bracketTrack.length - 1];
            //check latest bracket is the open pair
            if (latestBracket === bracketPair.open) {
                //remove latest bracket
                bracketTrack.pop();
            }
            else {
                //invalid pairing
                return false;
            }
        }
    }
    return bracketTrack.length === 0;
};
exports.isBalanced = isBalanced;
