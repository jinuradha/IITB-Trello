const checkValidate = (title, description) => {
    const isTitleValidate = /^[A-Za-z][A-Za-z-\s]+$/.test(title)
    const isDescriptionValidate = description && description.length > 25

    if(!isTitleValidate) return "Title should have alphabets only";
    if(!isDescriptionValidate) return "Description should be minimum of 25 characters";

    return null;

}

export default checkValidate;