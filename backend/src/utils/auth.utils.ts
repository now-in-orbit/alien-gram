import * as argon2 from 'argon2'

const crypto = require('crypto')
const { sign } = require('jsonwebtoken')

export const generateJwt = (payload: object, signature: string): any => {
    const setExpInSecondsSinceEpoch = (currentTimestamp: number): number => {
        const oneHourInMilliseconds: number = 3600000 * 3
        const futureTimestamp: number = Math.round(currentTimestamp) + oneHourInMilliseconds
        const futureTimestampInSeconds: number = futureTimestamp / 1000
        return Math.round(futureTimestampInSeconds)
    }

    const iat = new Date().getTime()
    const exp = setExpInSecondsSinceEpoch(iat)
    return sign({ exp, ...payload }, signature)
};

export const setActivationToken = (): string => crypto.randomBytes(16).toString('hex');

export const setHash = async (password: string): Promise<string> => argon2.hash(
    password,
    {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        hashLength: 32
    });

export const validatePassword = async (hash: string, password: string): Promise<boolean> => argon2.verify(
    hash,
    password,
    {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        hashLength: 32
    });