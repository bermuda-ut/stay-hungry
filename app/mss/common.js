function getAllById(elem) {
    const list = document.querySelectorAll(elem);

    const final = {};
    for (let i = 0; i < list.length; i++) {
        const curr = list[i];
        if(curr.id) {
            final[curr.id] = curr;
        }
    }

    return final;
}

module.exports = {
    getAllById,
};
