import { NextFunction, Request, Response } from "express"
import { AppError } from "../shared/error/AppError";
import authConfig from "../config/auth";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
    firstName: string;
    lastName: string;
    iat: number;
    exp: number;
    sub: string;
}

const userAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    //validando jwt

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("token not exist!", 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub, firstName, lastName } = decoded as ITokenPayload;

        req.user = {
            id: sub,
            firstName,
            lastName
        }

        return next()
    } catch {
        throw new AppError("token is invalid", 401);
    }


}

export { userAuthenticated }