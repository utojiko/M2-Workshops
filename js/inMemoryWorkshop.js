let inMemoryWorkshop;

function init() {
    inMemoryWorkshop = [];
    return Promise.resolve();
}

function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
            return;
        }
        const workshop = inMemoryWorkshop.find(workshop => workshop.name === name);
        if (workshop) {
            resolve(workshop);
        } else {
            reject(new Error("Workshop not found"));
        }
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        inMemoryWorkshop.push({
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        reject(new Error("Not implemented"))
    })
}

function updateWorkshop(oldName, newName, newDescription) {
    return new Promise((resolve, reject) => {
        const workshop = inMemoryWorkshop.find(workshop => workshop.name === oldName);
        if (workshop) {
            workshop.name = newName;
            workshop.description = newDescription;
            resolve(workshop);
        } else {
            reject(new Error("Workshop not found"));
        }
    });
}

module.exports = {
    init,
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}