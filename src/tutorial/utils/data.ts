export interface IUser {
    id: number;
    name: string;
    surname: string;
}

const usersData: IUser[] = [
    {
        id: 0,
        name: "Jan",
        surname: "Kowalski"
    },
    {
        id: 1,
        name: "Anna",
        surname: "Kowalska"
    },
    {
        id: 2,
        name: "Patrycja",
        surname: "Kowalska"
    },
];

export default usersData;