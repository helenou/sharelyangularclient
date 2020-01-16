import {User} from '../../models/user';

export class UserSerializer {
  fromJson(json: any): User {
    const user = new User();
    user.id = json.id;
    user.nom = json.nom;
    user.email = json.email;

    return user;
  }

  toJson(user: User): any {
    return {
      id: user.id,
      nom: user.nom,
    };
  }
}
