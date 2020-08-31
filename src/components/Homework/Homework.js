import React from 'react'
import Axios from 'axios'
import HomeworkCardRender from '../Homework_Render/Homework_Render'
import { Grid } from 'semantic-ui-react'
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
class Homework extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Axios.get('https://opentdb.com/api.php?amount=50').then((res) => {
            this.setState({
                data: res.data.results
            })
            console.log(this.state.data)
        })
    }
    render() {
        return <Grid>
            <Grid.Row>
                {this.state.data.map((item) => {
                    var type = item.type
                    var question=item.question
                    var answers = item.incorrect_answers
                    console.log(answers)
                    answers.push(item.correct_answer)
                    answers.length=answers.length
                    //answers = shuffle(answers)
                    return<HomeworkCardRender question={question} type={type} answers={answers} correct_answer={item.correct_answer}/>
                })}
            </Grid.Row>
        </Grid>
    }
}
export default Homework