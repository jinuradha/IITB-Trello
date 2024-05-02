const checkValidate = (title, description) => {
    const isTitleValidate = /^[a-zA-Z]+$/.test(title)
    const isDescriptionValidate = description && description.length < 25

    if(!isTitleValidate) return "Title should have alphabets only";
    if(!isDescriptionValidate) return "Description should have less than 25 characters";

    return null;

}

export default checkValidate;