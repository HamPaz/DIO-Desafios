const mestre = {
    id: 777,
    displayName: 'hpaz',
    fullName: {
        firstName: 'Hamilton',
        lastName: 'Paz'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(mestre))
console.log(getFullName(mestre))