import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            language: 'React',
            skills: '',
            gender: ''
        }
    }

    handleUserChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSkills = e => {
        this.setState({
            skills: e.target.value
        })
    }

    handleGender = e => {
        this.setState({
            gender: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="reactnative">React Native</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="skills">Skills = </label>
                    <input type="checkbox" id="skills" value={this.state.skills} onChange={this.handleSkills}/>
                    <label htmlFor="">React </label>
                    <input type="checkbox" id="skills" value={this.state.skills} onChange={this.handleSkills} />
                    <label htmlFor="">Angular </label>
                    <input type="checkbox" id="skills" value={this.state.skills} onChange={this.handleSkills} />
                    <label htmlFor="">JavaScript</label>
                </div>
                <br />
                <div>
                    <label htmlFor="gender">Gender = </label>
                    <input type="radio" name="gender" id="gender" value={this.state.gender} onChange={this.handleGender} />
                    <label htmlFor="">Male </label>
                    <input type="radio" name="gender" id="gender" value={this.state.gender} onChange={this.handleGender} />
                    <label htmlFor="">Female</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm