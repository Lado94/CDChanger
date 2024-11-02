const { User, CompactDisk, Order } = require("../models/index");
const HttpError = require("../services/HttpError");
const bcrypt = require("bcrypt");
require("dotenv").config();

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
const passwordREGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users || users.length === 0) {
      return next(new HttpError("Пользователи не найдены", 404));
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Недостаточно данных для создания пользователя", 400));
    }
    if (!passwordREGX.test(password)) {
      return next(new HttpError("Ошибка валидации: пароль не достаточно сильный", 400));
    }
    const newPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ name, email, password: newPassword });
    if (!user) {
      return next(new HttpError("Проблема при создании пользователя", 500));
    }
    res.status(201).json(user);
  } catch (err) {
    next(new HttpError(err.errors[0].message, 500));
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return next(new HttpError("Пользователь не найден", 404));
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;

    const updated = await User.update(
        { name, email, password },
        { where: { id } }
    );

    if (!updated[0]) {
      return next(new HttpError("Пользователь не найден или обновление не удалось", 404));
    }
    res.status(200).json({ message: "Обновление прошло успешно" });
  } catch (err) {
    next(err);
  }
};

const delUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await User.destroy({ where: { id } });
    if (!deleted) {
      return next(new HttpError("Пользователь не найден или удаление не удалось", 404));
    }
    res.status(200).json({ message: "Удаление прошло успешно" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  delUser,
  createUser,
};
