import * as React from "react";
import {Note} from "../models/note.model";
import {Button, Input} from "antd";
import 'antd/dist/antd.css';
import '../scss/_component.scss'
import TodoItem from "./todo-item";

const {TextArea} = Input;

interface IState {
    notes: Note[]
    titleInp: string,
    descriptionInp: string
}

class TodoList extends React.Component<any, IState> {
    public state: IState = {
        notes: [],
        titleInp: '',
        descriptionInp: ''
    };

    handleTitleChange = (event: any) => {
        this.setState({titleInp: event.target.value})
    };

    handleDescriptionChange = (event: any) => {
        this.setState({descriptionInp: event.target.value})
    };
    handleSubmit = () => {
        if (this.state.titleInp && this.state.descriptionInp) {
            const notes = this.state.notes;
            notes.push({
                id: this.state.notes.length,
                text: this.state.titleInp,
                description: this.state.descriptionInp
            });
            this.setState({
                notes: notes,
                titleInp: '',
                descriptionInp: ''
            });
        }
    };

    render() {
        return (<div className="todo-list">
            <div className="input-container">
                <Input type="text" value={this.state.titleInp} onChange={this.handleTitleChange} placeholder="Title"/>
                <TextArea value={this.state.descriptionInp} onChange={this.handleDescriptionChange} rows={4}
                          className="input" placeholder="Description"/>
                <Button onClick={this.handleSubmit} type="primary">Add note</Button>
            </div>
            {this.state.notes.map((note) => {
                return <TodoItem text={note.text!} id={note.id} date={note.date} description={note.description}/>;
            })}
        </div>)
    }
}

export default TodoList;
