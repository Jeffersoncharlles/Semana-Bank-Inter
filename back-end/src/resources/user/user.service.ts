import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { UserSignIn } from './dtos/user.signin.dtos';
import { UserSignUp } from './dtos/user.signup.dtos';
import hmacSHA512 from 'crypto-js/sha256'
import { AppError } from '../../shared/error/AppError';

class UserService {
    // private repository: Repository<User>
    // constructor() {
    //     this.repository = getRepository(User);
    // }

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


        return userExists;
    }
    async signup(user: UserSignUp) {

    }

}

export { UserService }