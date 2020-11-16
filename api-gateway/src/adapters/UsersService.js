import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async createUser({ contactId, firstName, lastName, email, password }) {
    const body = await got.post(`${USERS_SERVICE_URI}/users`, {
      json: { contactId, firstName, lastName, email, password }
    }).json();
    return body;
  }

  static async fetchUser({ userId }) {
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    return body;
  }

  static async updateUserPassword({ email, password }) {
    const body = await got.post(`${USERS_SERVICE_URI}/updatepassword`, { json: { email, password } }).json();
    return body;
  }

  static async createUserSession({ email, password }) {
    const body = await got.post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } }).json();
    return body;
  }

  static async deleteUserSession({ sessionId }) {
    const body = await got.delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    return body;
  }

  static async fetchUserSession({ sessionId }) {
    const body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    return body;
  }
  
  static async fetchAllOrders({ userId }) {
    const body = await got.get(`${USERS_SERVICE_URI}/orders/${userId}`).json();
    return body;
  }
  
  static async createOrder({ userId, firstName, age, address, radius, app }) {
    const body = await got.post(`${USERS_SERVICE_URI}/orders`, {
      json: { userId, firstName, age, address, radius, app }
    }).json();
    return body;
  }
  
  static async fetchOrder({ orderId }) {
    const body = await got.get(`${USERS_SERVICE_URI}/order/${orderId}`).json();
    return body;
  }

  static async fetchAllResults({ orderId }) {
    const body = await got.get(`${USERS_SERVICE_URI}/results/${orderId}`).json();
    return body;
  }

  static async createResult({ orderId, image }) {
    const body = await got.post(`${USERS_SERVICE_URI}/results`, {
      json: { orderId, image }
    }).json();
    return body;
  }

}