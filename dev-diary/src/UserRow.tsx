import * as React from "react";

export default class UserRow extends React.Component<any, any>{

    public render(){
        return (
            <tr>
                <td className="avatar">Avatar</td>
                <td className="name">{this.props.user.name}</td>
                <td className="summary">{this.props.user.summary}</td>
                <td className="actions">Buttons here</td>
            </tr>
        )
    }

}
