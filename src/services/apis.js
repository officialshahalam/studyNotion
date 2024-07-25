const BASE_URL=process.env.REACT_APP_BASE_URL;

export const categories={
    CATEGORY_API:`${BASE_URL}/api/v1/course/showallcategory`,
}



// AUTH ENDPOINTS
export const authApi = {
  SENDOTP_API: BASE_URL + "/api/v1/auth/sendotp",
  SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
  LOGIN_API: BASE_URL+"/api/v1/auth/login",
}
