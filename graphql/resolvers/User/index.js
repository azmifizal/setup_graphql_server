import User from "../../../models/User";

export default {
  Query: {
    user: (root, args) => {
      return User.findById(args.id)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    },
    users: () => {
      return User.find()
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err.message;
        });
    },
  },
  Mutation: {
    addUser: (root, args) => {
      // const newUser = new User({name, email});
      // return newUser.save();

      return User.create(args)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err.message;
        });
    },
    editUser: (root, { id, name, email }) => {
      // return User.findByIdAndUpdate(id, {name, email}, {new: true}).then((res) => {
      return User.findOneAndUpdate({ _id: id }, { name, email }, { new: true })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err.message;
        });
    },
    deleteUser: (root, { id }) => {
      return User.findOneAndRemove({ _id: id })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err.message;
        });
    },
  },
};
