declare namespace API {
  type LoginParams = {
    username: string
    password: string
  }
  type LoginResult = {
    token: string
  }

  type UserInfoResult = {
    member_id: string
    user_name: string
    name: string
    role: string
    role_id: string
    role_name: string
    phone: string
  }
}
