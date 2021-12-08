import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { UserSignIn } from './dtos/user.signin.dtos';
import { UserSignUp } from './dtos/user.signup.dtos';
import hmacSHA512 from 'crypto-js/sha256'
import { AppError } from '../../shared/error/AppError';
import authConfig from '../../config/auth'

import { sign } from 'jsonwebtoken'

class UserService {
    async signin(user: UserSignIn) {
        const repository = getRepository(User);

        const { email, password } = user;
        const passwordHash = hmacSHA512(password).toString();

        console.log(passwordHash)

        const userExists = await repository
            .findOne({ where: { email, password: passwordHash } })

        if (!userExists) {
            throw new AppError("User already exists!", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({
            firstName: userExists.firstNane,
            lastName: userExists.lastName,
            accountNumber: userExists.accountNumber,
            accountDigit: userExists.accountDigit,
            wallet: userExists.wallet
        }, secret, {
            subject: userExists.id,
            expiresIn,
        });

        //@ts-expect-error ignora

        delete userExists.password


        return { accessToken: token };
    }
    async signup(user: UserSignUp) {

    }

}

export { UserService }