import { Observable } from "rxjs";
import { IUserGateway } from "../../3.gateways/userGateway";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";

export class UserRepository {
    constructor(private userGateway: IUserGateway){ }

    createUser(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return this.userGateway.signIn(userDto);
    }
}