import React from 'react'
import { Image, Card, Grid, Menu, Button } from 'semantic-ui-react'

class HomeworkCardRender extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log(e.target.innerHTML)
        const p = this.props
        if (p.correct_answer == e.target.innerHTML) {
            e.target.style = 'background-color:green'
        }
        else {
            e.target.style = 'background-color:red'
        }
    }

    check() {
        const p = this.props
        if (p.type == "multiple") {
            return <Card.Content>
                <Card.Header>{p.question}</Card.Header>
                <Card.Description>
                    {p.answers.map((item) => {
                        return <Button onClick={this.handleClick}>{item}</Button>
                    })}
                </Card.Description>
            </Card.Content>
        }
        else if (p.type == "boolean") {
            return <Card.Content>
                <Card.Header>{p.question}</Card.Header>
                <Card.Description>
                    {p.answers.map((item) => {
                        return <Button onClick={this.handleClick}>{item}</Button>
                    })}
                </Card.Description>
            </Card.Content>
        }
    }
    render() {
        const p = this.props;

        return <Grid.Column width={4}>
            <Card>
                {
                    this.check()
                }
            </Card>
        </Grid.Column>
    }
}
export default HomeworkCardRender