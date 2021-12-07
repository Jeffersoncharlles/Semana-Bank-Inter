import { getRepository, Repository } from 'typeorm';
import { User } from '../../entity/User';
import { UserSignIn } from './dtos/user.signin.dtos';
import { UserSignUp } from './dtos/user.signup.dtos';

class UserService {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User);
    }

    async signin(user: UserSignIn) {
        const { email, password } = user;
        const userExists = await this.repository
            .findOne({ where: { email, password } })

        if (!userExists) {
            return null;
        }


    }
    async signup(user: UserSignUp) {

    }

}

export { UserService }