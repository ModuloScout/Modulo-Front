/// <reference types="react-scripts" />
interface IScope {
    id: string,
    user: string,
    structure: string,
    role: string,
    isActive: boolean,
    created_at: datetime,
}

interface IUser {
    id: string,
    email: string,
    roles: [string],
    password: string,
    firstName: string,
    lastName: string,
    scopes: Array<IScope>,
    userIdentifier: string,
    events: Array<IEvent>,
    genre: {
        name: string,
        value: string
    }
    fullName: string
}

interface IRole {
    id: string,
    name: string,
    code: string,
    feminineName: string | null,
    ageSection: string,
    icon: string | null
}

interface IEvent {
    id: string,
    title: string,
    dateStart: string,
    dateEnd: string,
    description: string,
    typeEvent: string,
    active: true,
    "concernedStructure": [
        "string"
    ],
    "concernedRole": [
        "string"
    ],
    "concernedUser": [
        "string"
    ]
}
