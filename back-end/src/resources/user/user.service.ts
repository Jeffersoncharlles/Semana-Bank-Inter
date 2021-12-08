import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { UserSignIn } from './dtos/user.signin.dtos';
import { UserSignUp } from './dtos/user.signup.dtos';
import { AppError } from '../../shared/error/AppError';
import authConfig from '../../config/auth'

import { sign } from 'jsonwebtoken'
import sha256 from 'crypto-js/sha256';

class UserService {
    async signin(user: UserSignIn) {
        const repository = getRepository(User);

        const { email, password } = user;
        const passwordHash = sha256(password).toString();

        const userExists = await repository.findOne({ where: { email, password: passwordHash } })

        if (!userExists) {
            throw new AppError("User already exists!", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({
            firstName: userExists.firstName,
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

        const repository = getRepository(User);

        const userExists = await repository
            .findOne({ where: { email: user.email } })

        if (userExists) {
            throw new AppError("User already exists!", 401);
        }

        const userData = {
            ...user,
            password: sha256(user.password).toString(),
            wallet: 2000,
            accountNumber: Math.floor(Math.random() * 999999),
            accountDigit: Math.floor(Math.random() * 99),
        }

        const userCreate = await repository.save(userData);

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({
            firstName: user.firstName,
            lastName: user.lastName,
            accountNumber: userData.accountNumber,
            accountDigit: userData.accountDigit,
            wallet: userData.wallet
        }, secret, {
            subject: userCreate.id,
            expiresIn,
        });

        return { accessToken: token };
    }

    async me(user: Partial<User>) {
        const repository = getRepository(User);
        const userExists = await repository.findOne({ where: { id: user.id } })

        if (!userExists) {
            throw new AppError("User already exists!", 401);
        }

        //@ts-expect-error ignora
        delete userExists.password

        return userExists;
    }

}

export { UserService }