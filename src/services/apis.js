const BASE_URL=process.env.REACT_APP_BASE_URL;
console.log("BASE URL IS::",BASE_URL);

export const categories={
    CATEGORY_API:`${BASE_URL}/course/showallcategory`,
}
