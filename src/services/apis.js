const BASE_URL=process.env.REACT_APP_BASE_URL;

export const categories={
    CATEGORY_API:`${BASE_URL}course/showallcategory`,
}



// AUTH ENDPOINTS
export const authApi = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL+"/auth/login",
}
