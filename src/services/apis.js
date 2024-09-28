const BASE_URL=process.env.REACT_APP_BASE_URL;

export const categories={
    CATEGORY_API:`${BASE_URL}/course/showallcategory`,
}



// AUTH ENDPOINTS
export const authApi = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL+"/auth/login",
  RESET_PASSWORD_TOKEN_API:BASE_URL+"/auth/resetpasswordtoken",
  RESET_PASSWORD_API:BASE_URL+"/auth/resetpassword",
}

export const contactApi={
  CONTACT_US_API: BASE_URL + "/contact"
}


export const settingsApi={
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/settings/updatedisplaypicture",
  UPDATE_PROFILE_API: BASE_URL +"/settings/updateprofile"
}