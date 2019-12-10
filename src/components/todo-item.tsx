import * as React from 'react'
import 'antd/dist/antd.css';
import { Card, Icon } from 'antd';
import {Note} from "../models/note.model";

interface IProps extends Note{
    isCompleted?: boolean,
}

class TodoItem extends React.Component<IProps, any> {
    render() {
        return (
            <div className="list-item">
                <Card title={this.props.text} extra={<Icon onClick={this.handelRemove} type="close" />}>
                    <p>{this.props.description}</p>
                </Card>
            </div>
        )
    }

    handelRemove = () => {
        // todo: handle when item is removed
    }
}

export default TodoItem;
