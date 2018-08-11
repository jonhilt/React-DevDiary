import * as React from "react";
import UserRow from "./UserRow";

export default class MyUsers extends React.Component<any, IState>{

    public state: IState = {
        loading: false,
        "users": []        
    };

    public async componentDidMount() {
         this.setState({ loading: true });
        const result = await fetch('https://localhost:5001/api/user');
        const users = await result.json();
        this.setState({ users, loading: false });
    }

    public render() {
        return (
            <div>
                <h1>My Users</h1>
                {this.state.loading && <div>Loading...</div>}
                <table className="user-list">
                    <tbody>
                        {this.state.users.map(user => <UserRow key={user.id} user={user} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export interface IState {
    loading: boolean;
    users: IUser[];
}

export interface IUser {
    id: number,
    name: string,
    summary: string
}